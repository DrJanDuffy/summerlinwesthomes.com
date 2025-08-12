# GitHub SSH & GPG Key Setup Scripts

This directory contains automated scripts for setting up SSH and GPG keys for GitHub authentication and commit signing. These scripts handle the entire process from key generation to GitHub configuration.

## 🎯 What These Scripts Do

The scripts automate the following tasks:

1. **Check Prerequisites**: Verify Git, OpenSSH, and GPG are installed
2. **Collect Information**: Gather user details (name, email, GitHub username)
3. **Generate SSH Keys**: Create Ed25519 SSH key pair for GitHub authentication
4. **Generate GPG Keys**: Create RSA 4096-bit GPG key for commit signing
5. **Configure Git**: Set up global Git configuration with the new keys
6. **Setup SSH Agent**: Start SSH agent and add the private key
7. **Test Connections**: Verify SSH connectivity to GitHub
8. **Create Utilities**: Generate convenience scripts for checking key status

## 📁 Available Scripts

### 1. **Bash Script** (`setup-github-keys.sh`)

- **Platform**: Linux, macOS, WSL
- **Features**: Full automation with colored output and error handling
- **Requirements**: Bash shell, OpenSSH, GPG, Git

### 2. **PowerShell Script** (`setup-github-keys.ps1`)

- **Platform**: Windows 10/11
- **Features**: Windows-optimized with PowerShell-specific features
- **Requirements**: PowerShell 5.1+, OpenSSH, GPG4Win, Git for Windows

### 3. **Node.js Script** (`setup-github-keys.js`)

- **Platform**: Cross-platform (Windows, macOS, Linux)
- **Features**: JavaScript-based automation with async/await
- **Requirements**: Node.js 14+, OpenSSH, GPG, Git

## 🛠️ Prerequisites

Before running any script, ensure you have:

### Required Software

- **Git**: [Download Git](https://git-scm.com/downloads)
- **OpenSSH**: Usually included with Git or available as a package
- **GPG**:
  - **Windows**: [GPG4Win](https://www.gpg4win.org/)
  - **macOS**: `brew install gnupg`
  - **Linux**: `sudo apt-get install gnupg` (Ubuntu/Debian) or equivalent

### GitHub Account

- A GitHub account with access to SSH and GPG key settings
- Admin access to repositories where you want to use these keys

## 🚀 Quick Start

### Option 1: Bash (Linux/macOS/WSL)

```bash
# Make script executable
chmod +x scripts/setup-github-keys.sh

# Run the script
./scripts/setup-github-keys.sh
```

### Option 2: PowerShell (Windows)

```powershell
# Run the script
.\scripts\setup-github-keys.ps1

# Or with parameters
.\scripts\setup-github-keys.ps1 -Name "Your Name" -Email "your.email@example.com" -GitHubUsername "yourusername"
```

### Option 3: Node.js (Cross-platform)

```bash
# Run the script
node scripts/setup-github-keys.js

# Or make it executable (Unix-like systems)
chmod +x scripts/setup-github-keys.js
./scripts/setup-github-keys.js
```

## 📋 What Happens During Setup

### 1. **Prerequisites Check**

- Verifies Git, OpenSSH, and GPG are installed
- Checks for existing configurations

### 2. **User Information Collection**

- Prompts for your full name, email, and GitHub username
- Uses existing Git configuration as defaults when available

### 3. **SSH Key Generation**

- Creates Ed25519 SSH key pair (`id_ed25519_github`)
- Starts SSH agent and adds the private key
- Displays the public key for GitHub upload

### 4. **GPG Key Generation**

- Creates RSA 4096-bit GPG key pair
- Configures Git to use the key for signing
- Displays the public key for GitHub upload

### 5. **Configuration Setup**

- Updates Git global configuration
- Creates SSH config file
- Sets proper file permissions
- Creates convenience scripts

## 🔑 After Running the Script

### 1. **Add SSH Key to GitHub**

1. Copy the displayed SSH public key
2. Go to [GitHub SSH Keys](https://github.com/settings/keys)
3. Click "New SSH key"
4. Paste the key and save

### 2. **Add GPG Key to GitHub**

1. Copy the displayed GPG public key
2. Go to [GitHub GPG Keys](https://github.com/settings/gpg)
3. Click "New GPG key"
4. Paste the key and save

### 3. **Test Your Setup**

```bash
# Test SSH connection
ssh -T git@github.com

# Test GPG signing
echo "test" | gpg --clearsign
```

## 🔧 Customization Options

### Script Parameters

Most scripts accept parameters for customization:

```bash
# Bash script
./setup-github-keys.sh --name "Your Name" --email "your.email@example.com" --github "yourusername"

# PowerShell script
.\setup-github-keys.ps1 -Name "Your Name" -Email "your.email@example.com" -GitHubUsername "yourusername"

# Node.js script
node setup-github-keys.js --name "Your Name" --email "your.email@example.com" --github "yourusername"
```

### Environment Variables

You can also set environment variables:

```bash
export GITHUB_NAME="Your Name"
export GITHUB_EMAIL="your.email@example.com"
export GITHUB_USERNAME="yourusername"
./setup-github-keys.sh
```

## 🚨 Troubleshooting

### Common Issues

#### SSH Connection Failed

```bash
# Check SSH agent
ssh-add -l

# Test connection with verbose output
ssh -vT git@github.com

# Restart SSH agent
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_ed25519_github
```

#### GPG Signing Issues

```bash
# Check GPG keys
gpg --list-secret-keys

# Test GPG signing
echo "test" | gpg --clearsign

# Check Git GPG configuration
git config --global --list | grep gpg
```

#### Permission Denied

```bash
# Fix SSH key permissions
chmod 600 ~/.ssh/id_ed25519_github
chmod 644 ~/.ssh/id_ed25519_github.pub

# Fix GPG key permissions
chmod 600 ~/.gnupg/private-keys-v1.d/*
```

### Getting Help

If you encounter issues:

1. Check the script output for error messages
2. Verify all prerequisites are installed
3. Check file permissions
4. Review GitHub's SSH and GPG documentation

## 📚 Additional Resources

### GitHub Documentation

- [SSH Key Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GPG Key Setup](https://docs.github.com/en/authentication/managing-commit-signature-verification)
- [Troubleshooting SSH](https://docs.github.com/en/authentication/troubleshooting-ssh)

### Security Best Practices

- Use strong passphrases for your keys
- Regularly rotate your keys
- Never share private keys
- Use different keys for different services

## 🤝 Contributing

### Reporting Issues

If you find bugs or have suggestions:

1. Check existing issues
2. Create a new issue with detailed information
3. Include your operating system and script version
4. Provide error messages and logs

### Improving Scripts

To contribute improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

These scripts are provided as-is for educational and practical use. They follow best practices for security and automation.

---

_Automate your GitHub setup and focus on what matters most - your code!_
