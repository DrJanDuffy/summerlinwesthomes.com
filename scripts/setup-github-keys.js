#!/usr/bin/env node

/**
 * GitHub SSH and GPG Key Setup Automation Script
 * This script automates the entire process of setting up SSH and GPG keys for GitHub
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

// Colors for output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

// Utility functions
function printStatus(message) {
    console.log(`${colors.blue}[INFO]${colors.reset} ${message}`);
}

function printSuccess(message) {
    console.log(`${colors.green}[SUCCESS]${colors.reset} ${message}`);
}

function printWarning(message) {
    console.log(`${colors.yellow}[WARNING]${colors.reset} ${message}`);
}

function printError(message) {
    console.log(`${colors.red}[ERROR]${colors.reset} ${message}`);
}

function runCommand(command, options = {}) {
    try {
        const result = execSync(command, { 
            encoding: 'utf8', 
            stdio: options.silent ? 'pipe' : 'inherit',
            ...options 
        });
        return { success: true, output: result };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

function commandExists(command) {
    try {
        execSync(`which ${command}`, { stdio: 'pipe' });
        return true;
    } catch {
        try {
            execSync(`where ${command}`, { stdio: 'pipe' });
            return true;
        } catch {
            return false;
        }
    }
}

function getUserInput(prompt, defaultValue = '') {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        const question = defaultValue ? `${prompt} [${defaultValue}]: ` : `${prompt}: `;
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer || defaultValue);
        });
    });
}

function getHomeDir() {
    return os.homedir();
}

function getSshDir() {
    return path.join(getHomeDir(), '.ssh');
}

function getBinDir() {
    const binDir = path.join(getHomeDir(), '.local', 'bin');
    if (!fs.existsSync(binDir)) {
        fs.mkdirSync(binDir, { recursive: true });
    }
    return binDir;
}

function checkSshKeyExists(keyName) {
    const keyPath = path.join(getSshDir(), keyName);
    return fs.existsSync(keyPath);
}

function checkGpgKeyExists(email) {
    const result = runCommand(`gpg --list-secret-keys "${email}"`, { silent: true });
    return result.success;
}

async function main() {
    console.log('🚀 GitHub SSH and GPG Key Setup Automation');
    console.log('==========================================');
    console.log('');

    // Check prerequisites
    printStatus('Checking prerequisites...');

    if (!commandExists('ssh-keygen')) {
        printError('ssh-keygen not found. Please install OpenSSH.');
        process.exit(1);
    }

    if (!commandExists('gpg')) {
        printError('gpg not found. Please install GPG.');
        process.exit(1);
    }

    if (!commandExists('git')) {
        printError('git not found. Please install Git.');
        process.exit(1);
    }

    printSuccess('All prerequisites are installed');
    console.log('');

    // Get user information
    printStatus('Collecting user information...');

    const gitName = runCommand('git config --global user.name', { silent: true });
    const gitEmail = runCommand('git config --global user.email', { silent: true });

    const name = await getUserInput('Enter your full name', gitName.success ? gitName.output.trim() : '');
    const email = await getUserInput('Enter your email address', gitEmail.success ? gitEmail.email.trim() : '');
    const githubUsername = await getUserInput('Enter your GitHub username');

    if (!name || !email || !githubUsername) {
        printError('All fields are required');
        process.exit(1);
    }

    // Set Git global configuration
    printStatus('Setting Git global configuration...');
    runCommand(`git config --global user.name "${name}"`);
    runCommand(`git config --global user.email "${email}"`);
    printSuccess('Git configuration updated');
    console.log('');

    // SSH Key Setup
    printStatus('Setting up SSH key...');

    const sshKeyName = 'id_ed25519_github';
    const sshKeyPath = path.join(getSshDir(), sshKeyName);

    if (checkSshKeyExists(sshKeyName)) {
        printWarning(`SSH key already exists at ${sshKeyPath}`);
        const overwrite = await getUserInput('Do you want to overwrite it? (y/N)', 'N');
        if (overwrite.toLowerCase() === 'y') {
            fs.unlinkSync(sshKeyPath);
            fs.unlinkSync(`${sshKeyPath}.pub`);
        } else {
            printStatus('Using existing SSH key');
        }
    }

    if (!fs.existsSync(sshKeyPath)) {
        printStatus('Generating new SSH key...');
        const result = runCommand(`ssh-keygen -t ed25519 -C "${email}" -f "${sshKeyPath}" -N ""`);
        if (result.success) {
            printSuccess('SSH key generated');
        } else {
            printError('Failed to generate SSH key');
            process.exit(1);
        }
    }

    // Start ssh-agent and add key
    printStatus('Starting SSH agent and adding key...');
    
    // Check if ssh-agent is running
    const sshAgentRunning = runCommand('ssh-add -l', { silent: true });
    if (!sshAgentRunning.success) {
        // Start ssh-agent
        if (process.platform === 'win32') {
            runCommand('start ssh-agent', { shell: true });
        } else {
            runCommand('eval "$(ssh-agent -s)"', { shell: true });
        }
        // Wait a moment for ssh-agent to start
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Add key to ssh-agent
    const addResult = runCommand(`ssh-add "${sshKeyPath}"`);
    if (addResult.success) {
        printSuccess('SSH key added to agent');
    } else {
        printWarning('Could not add SSH key to agent. This is normal on some systems.');
    }

    // Display public key
    console.log('');
    printStatus('Your SSH public key (add this to GitHub):');
    console.log('================================================');
    const publicKey = fs.readFileSync(`${sshKeyPath}.pub`, 'utf8');
    console.log(publicKey);
    console.log('');
    printWarning('Copy the above SSH public key and add it to your GitHub account at:');
    printWarning('https://github.com/settings/keys');
    console.log('');

    // GPG Key Setup
    printStatus('Setting up GPG key...');

    if (checkGpgKeyExists(email)) {
        printWarning(`GPG key already exists for ${email}`);
        const overwrite = await getUserInput('Do you want to create a new one? (y/N)', 'N');
        if (overwrite.toLowerCase() === 'y') {
            printStatus('Removing existing GPG key...');
            const keyList = runCommand(`gpg --list-secret-keys --keyid-format LONG "${email}"`, { silent: true });
            if (keyList.success) {
                const lines = keyList.output.split('\n');
                const secLine = lines.find(line => line.includes('sec'));
                if (secLine) {
                    const keyId = secLine.split(/\s+/)[1].split('/')[1];
                    runCommand(`gpg --delete-secret-key ${keyId}`, { silent: true });
                    runCommand(`gpg --delete-key ${keyId}`, { silent: true });
                }
            }
        }
    }

    if (!checkGpgKeyExists(email)) {
        printStatus('Generating new GPG key...');

        // Create GPG configuration
        const gpgConfig = `Key-Type: RSA
Key-Length: 4096
Subkey-Type: RSA
Subkey-Length: 4096
Name-Real: ${name}
Name-Email: ${email}
Expire-Date: 0
%commit`;

        const tempGpgFile = path.join(os.tmpdir(), 'gpg-batch');
        fs.writeFileSync(tempGpgFile, gpgConfig);

        const gpgResult = runCommand(`gpg --batch --generate-key "${tempGpgFile}"`);
        if (gpgResult.success) {
            printSuccess('GPG key generated');
        } else {
            printError('Failed to generate GPG key');
            process.exit(1);
        }

        // Clean up temp file
        fs.unlinkSync(tempGpgFile);
    }

    // Get GPG key ID
    const gpgKeyList = runCommand(`gpg --list-secret-keys --keyid-format LONG "${email}"`, { silent: true });
    let gpgKeyId = '';
    if (gpgKeyList.success) {
        const lines = gpgKeyList.output.split('\n');
        const secLine = lines.find(line => line.includes('sec'));
        if (secLine) {
            gpgKeyId = secLine.split(/\s+/)[1].split('/')[1];
        }
    }

    if (!gpgKeyId) {
        printError('Could not retrieve GPG key ID');
        process.exit(1);
    }

    // Configure Git to use GPG signing
    printStatus('Configuring Git to use GPG signing...');
    runCommand(`git config --global user.signingkey ${gpgKeyId}`);
    runCommand('git config --global commit.gpgsign true');
    runCommand('git config --global tag.gpgsign true');
    printSuccess('Git configured for GPG signing');

    // Display GPG public key
    console.log('');
    printStatus('Your GPG public key (add this to GitHub):');
    console.log('================================================');
    const gpgExport = runCommand(`gpg --armor --export ${gpgKeyId}`, { silent: true });
    if (gpgExport.success) {
        console.log(gpgExport.output);
    }
    console.log('');
    printWarning('Copy the above GPG public key and add it to your GitHub account at:');
    printWarning('https://github.com/settings/gpg_keys');
    console.log('');

    // Test SSH connection
    printStatus('Testing SSH connection to GitHub...');
    const sshTest = runCommand('ssh -T git@github.com', { silent: true });
    if (sshTest.success && sshTest.output.includes('successfully authenticated')) {
        printSuccess('SSH connection to GitHub successful!');
    } else {
        printWarning('SSH connection test failed. This is normal if you haven\'t added the key to GitHub yet.');
        printWarning('Add the SSH key to GitHub and run this script again to test the connection.');
    }

    // Create SSH config
    printStatus('Creating SSH config...');
    const sshDir = getSshDir();
    if (!fs.existsSync(sshDir)) {
        fs.mkdirSync(sshDir, { recursive: true });
    }

    const sshConfigPath = path.join(sshDir, 'config');
    let sshConfig = '';
    
    if (fs.existsSync(sshConfigPath)) {
        sshConfig = fs.readFileSync(sshConfigPath, 'utf8');
    }

    if (!sshConfig.includes('Host github.com')) {
        const githubConfig = `
# GitHub SSH Configuration
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/${sshKeyName}
    IdentitiesOnly yes`;
        
        if (sshConfig) {
            sshConfig += githubConfig;
        } else {
            sshConfig = githubConfig;
        }
        
        fs.writeFileSync(sshConfigPath, sshConfig);
        printSuccess('SSH config created/updated');
    } else {
        printStatus('GitHub SSH config already exists');
    }

    // Set proper permissions (Unix-like systems)
    if (process.platform !== 'win32') {
        printStatus('Setting proper file permissions...');
        runCommand(`chmod 700 "${sshDir}"`);
        runCommand(`chmod 600 "${sshKeyPath}"`);
        runCommand(`chmod 644 "${sshKeyPath}.pub"`);
        runCommand(`chmod 600 "${sshConfigPath}"`);
        printSuccess('File permissions set correctly');
    }

    // Create convenience script
    printStatus('Creating convenience script...');
    const binDir = getBinDir();
    const statusScript = `#!/usr/bin/env node

console.log('🔑 GitHub Keys Status');
console.log('====================');
console.log('');

console.log('SSH Keys:');
require('child_process').execSync('ssh-add -l', { stdio: 'inherit' });

console.log('');
console.log('GPG Keys:');
require('child_process').execSync('gpg --list-secret-keys --keyid-format LONG', { stdio: 'inherit' });

console.log('');
console.log('Git Configuration:');
console.log('User:', require('child_process').execSync('git config --global user.name', { encoding: 'utf8' }).trim());
console.log('Email:', require('child_process').execSync('git config --global user.email', { encoding: 'utf8' }).trim());
console.log('Signing Key:', require('child_process').execSync('git config --global user.signingkey', { encoding: 'utf8' }).trim());
console.log('Commit Signing:', require('child_process').execSync('git config --global commit.gpgsign', { encoding: 'utf8' }).trim());
console.log('Tag Signing:', require('child_process').execSync('git config --global tag.gpgsign', { encoding: 'utf8' }).trim());
`;

    const statusScriptPath = path.join(binDir, 'github-keys-status.js');
    fs.writeFileSync(statusScriptPath, statusScript);
    
    if (process.platform !== 'win32') {
        runCommand(`chmod +x "${statusScriptPath}"`);
    }
    
    printSuccess(`Convenience script created at ${statusScriptPath}`);

    console.log('');
    printSuccess('🎉 Setup complete! Here\'s what to do next:');
    console.log('');
    console.log('1. Add the SSH public key to GitHub:');
    console.log('   https://github.com/settings/keys');
    console.log('');
    console.log('2. Add the GPG public key to GitHub:');
    console.log('   https://github.com/settings/gpg_keys');
    console.log('');
    console.log('3. Test your setup by running:');
    console.log('   node ~/.local/bin/github-keys-status.js');
    console.log('');
    console.log('4. Clone a repository using SSH:');
    console.log(`   git clone git@github.com:${githubUsername}/your-repo.git`);
    console.log('');
    console.log('5. Make a test commit to verify GPG signing works');
    console.log('');
    printWarning('Remember to backup your private keys securely!');
}

// Run the main function
if (require.main === module) {
    main().catch(error => {
        printError(`An error occurred: ${error.message}`);
        process.exit(1);
    });
}

module.exports = { main };
