# GitHub SSH and GPG Keys Automation

This directory contains comprehensive automation scripts for setting up SSH and GPG keys for GitHub authentication and commit signing.

## 🚀 What These Scripts Do

These automation scripts will:

1. **Generate SSH Keys**: Create Ed25519 SSH keys for secure GitHub authentication
2. **Generate GPG Keys**: Create RSA 4096-bit GPG keys for commit signing
3. **Configure Git**: Set up global Git configuration for your name, email, and signing preferences
4. **Setup SSH Agent**: Start and configure SSH agent with your new keys
5. **Create SSH Config**: Set up proper SSH configuration for GitHub
6. **Configure GPG Signing**: Enable automatic commit and tag signing
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
2. Go to [GitHub GPG Keys](https://github.com/settings/gpg_keys)
3. Click "New GPG key"
4. Paste the key and save

### 3. **Test Your Setup**
```bash
# Test SSH connection
ssh -T git@github.com

# Check key status
github-keys-status  # Bash/PowerShell
node ~/.local/bin/github-keys-status.js  # Node.js
```

## 🔧 Manual Steps (if needed)

### SSH Key Generation
```bash
ssh-keygen -t ed25519 -C "your.email@example.com" -f ~/.ssh/id_ed25519_github
```

### GPG Key Generation
```bash
gpg --full-generate-key
# Choose RSA, 4096 bits, no expiration
```

### Git Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global user.signingkey YOUR_GPG_KEY_ID
git config --global commit.gpgsign true
git config --global tag.gpgsign true
```

## 🚨 Troubleshooting

### Common Issues

#### SSH Connection Fails
```bash
# Check SSH agent
ssh-add -l

# Test connection with verbose output
ssh -vT git@github.com

# Restart SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github
```

#### GPG Signing Issues
```bash
# Check GPG keys
gpg --list-secret-keys --keyid-format LONG

# Test GPG signing
echo "test" | gpg --clearsign

# Check Git GPG config
git config --global user.signingkey
```

#### Permission Issues (Unix-like systems)
```bash
# Fix SSH directory permissions
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519_github
chmod 644 ~/.ssh/id_ed25519_github.pub
chmod 600 ~/.ssh/config
```

### Windows-Specific Issues

#### OpenSSH Not Found
```powershell
# Install OpenSSH (Windows 10 1809+)
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0

# Or install via Git for Windows (includes OpenSSH)
```

#### GPG Not Found
- Download and install [GPG4Win](https://www.gpg4win.org/)
- Ensure GPG is in your PATH

## 🔒 Security Best Practices

### Key Management
- **Backup private keys** securely (encrypted USB drive, password manager)
- **Use strong passphrases** for SSH keys (if you choose to add them)
- **Rotate keys regularly** (annually recommended)
- **Limit key scope** - use different keys for different purposes

### Repository Security
- **Enable branch protection** on important repositories
- **Require signed commits** for main branches
- **Use GPG signing** for all commits and tags
- **Enable vigilant mode** in GitHub settings

## 📚 Additional Resources

- [GitHub SSH Documentation](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [GitHub GPG Documentation](https://docs.github.com/en/authentication/managing-commit-signature-verification)
- [OpenSSH Documentation](https://www.openssh.com/manual.html)
- [GPG Documentation](https://www.gnupg.org/documentation/)

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve these automation scripts.

## 📄 License

These scripts are provided as-is for educational and automation purposes. Use at your own risk and ensure compliance with your organization's security policies.
