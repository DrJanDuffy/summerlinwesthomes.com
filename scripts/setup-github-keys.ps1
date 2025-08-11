# GitHub SSH and GPG Key Setup Automation Script for Windows
# This script automates the entire process of setting up SSH and GPG keys for GitHub

param(
    [string]$Name = "",
    [string]$Email = "",
    [string]$GitHubUsername = ""
)

# Set error action preference
$ErrorActionPreference = "Stop"

# Function to write colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Function to check if command exists
function Test-Command {
    param([string]$Command)
    try {
        Get-Command $Command -ErrorAction Stop | Out-Null
        return $true
    }
    catch {
        return $false
    }
}

# Function to get user input with default value
function Get-UserInput {
    param(
        [string]$Prompt,
        [string]$Default = ""
    )
    
    if ($Default) {
        $input = Read-Host "$Prompt [$Default]"
        return if ($input) { $input } else { $Default }
    } else {
        return Read-Host $Prompt
    }
}

# Function to check if SSH key already exists
function Test-SshKeyExists {
    param([string]$KeyName)
    $keyPath = "$env:USERPROFILE\.ssh\$KeyName"
    return Test-Path $keyPath
}

# Function to check if GPG key already exists
function Test-GpgKeyExists {
    param([string]$Email)
    try {
        $result = gpg --list-secret-keys $Email 2>$null
        return $LASTEXITCODE -eq 0
    }
    catch {
        return $false
    }
}

# Main setup function
function Main {
    Write-Host "🚀 GitHub SSH and GPG Key Setup Automation for Windows" -ForegroundColor Cyan
    Write-Host "=======================================================" -ForegroundColor Cyan
    Write-Host ""
    
    # Check prerequisites
    Write-Status "Checking prerequisites..."
    
    if (-not (Test-Command "ssh-keygen")) {
        Write-Error "ssh-keygen not found. Please install OpenSSH or Git for Windows."
        Write-Host "You can install OpenSSH via: Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0" -ForegroundColor Yellow
        exit 1
    }
    
    if (-not (Test-Command "gpg")) {
        Write-Error "gpg not found. Please install GPG4Win from https://www.gpg4win.org/"
        exit 1
    }
    
    if (-not (Test-Command "git")) {
        Write-Error "git not found. Please install Git for Windows from https://git-scm.com/download/win"
        exit 1
    }
    
    Write-Success "All prerequisites are installed"
    Write-Host ""
    
    # Get user information
    Write-Status "Collecting user information..."
    
    if (-not $Name) {
        $Name = Get-UserInput "Enter your full name" (git config --global user.name 2>$null)
    }
    
    if (-not $Email) {
        $Email = Get-UserInput "Enter your email address" (git config --global user.email 2>$null)
    }
    
    if (-not $GitHubUsername) {
        $GitHubUsername = Get-UserInput "Enter your GitHub username"
    }
    
    if (-not $Name -or -not $Email -or -not $GitHubUsername) {
        Write-Error "All fields are required"
        exit 1
    }
    
    # Set Git global configuration
    Write-Status "Setting Git global configuration..."
    git config --global user.name $Name
    git config --global user.email $Email
    Write-Success "Git configuration updated"
    Write-Host ""
    
    # SSH Key Setup
    Write-Status "Setting up SSH key..."
    
    $sshKeyName = "id_ed25519_github"
    $sshKeyPath = "$env:USERPROFILE\.ssh\$sshKeyName"
    
    if (Test-SshKeyExists $sshKeyName) {
        Write-Warning "SSH key already exists at $sshKeyPath"
        $overwrite = Get-UserInput "Do you want to overwrite it? (y/N)" "N"
        if ($overwrite -match "^[Yy]$") {
            Remove-Item $sshKeyPath -Force -ErrorAction SilentlyContinue
            Remove-Item "$sshKeyPath.pub" -Force -ErrorAction SilentlyContinue
        } else {
            Write-Status "Using existing SSH key"
        }
    }
    
    if (-not (Test-Path $sshKeyPath)) {
        Write-Status "Generating new SSH key..."
        ssh-keygen -t ed25519 -C $Email -f $sshKeyPath -N '""'
        Write-Success "SSH key generated"
    }
    
    # Start ssh-agent and add key
    Write-Status "Starting SSH agent and adding key..."
    
    # Check if ssh-agent is running
    $sshAgentProcess = Get-Process ssh-agent -ErrorAction SilentlyContinue
    if (-not $sshAgentProcess) {
        Start-Process ssh-agent -WindowStyle Hidden
        Start-Sleep -Seconds 2
    }
    
    # Add key to ssh-agent
    ssh-add $sshKeyPath
    Write-Success "SSH key added to agent"
    
    # Display public key
    Write-Host ""
    Write-Status "Your SSH public key (add this to GitHub):"
    Write-Host "================================================" -ForegroundColor Gray
    Get-Content "$sshKeyPath.pub"
    Write-Host ""
    Write-Warning "Copy the above SSH public key and add it to your GitHub account at:"
    Write-Warning "https://github.com/settings/keys"
    Write-Host ""
    
    # GPG Key Setup
    Write-Status "Setting up GPG key..."
    
    if (Test-GpgKeyExists $Email) {
        Write-Warning "GPG key already exists for $Email"
        $overwrite = Get-UserInput "Do you want to create a new one? (y/N)" "N"
        if ($overwrite -match "^[Yy]$") {
            Write-Status "Removing existing GPG key..."
            $keyId = (gpg --list-secret-keys --keyid-format LONG $Email | Select-String 'sec' | Select-Object -First 1 | ForEach-Object { ($_ -split '\s+')[1] -split '/' | Select-Object -Last 1 })
            gpg --delete-secret-key $keyId
            gpg --delete-key $keyId
        }
    }
    
    if (-not (Test-GpgKeyExists $Email)) {
        Write-Status "Generating new GPG key..."
        
        # Create GPG configuration
        $gpgConfig = @"
Key-Type: RSA
Key-Length: 4096
Subkey-Type: RSA
Subkey-Length: 4096
Name-Real: $Name
Name-Email: $Email
Expire-Date: 0
%commit
"@
        
        $gpgConfig | Out-File -FilePath "$env:TEMP\gpg-batch" -Encoding ASCII
        gpg --batch --generate-key "$env:TEMP\gpg-batch"
        Remove-Item "$env:TEMP\gpg-batch" -Force
        Write-Success "GPG key generated"
    }
    
    # Get GPG key ID
    $gpgKeyId = (gpg --list-secret-keys --keyid-format LONG $Email | Select-String 'sec' | Select-Object -First 1 | ForEach-Object { ($_ -split '\s+')[1] -split '/' | Select-Object -Last 1 })
    
    # Configure Git to use GPG signing
    Write-Status "Configuring Git to use GPG signing..."
    git config --global user.signingkey $gpgKeyId
    git config --global commit.gpgsign true
    git config --global tag.gpgsign true
    Write-Success "Git configured for GPG signing"
    
    # Display GPG public key
    Write-Host ""
    Write-Status "Your GPG public key (add this to GitHub):"
    Write-Host "================================================" -ForegroundColor Gray
    gpg --armor --export $gpgKeyId
    Write-Host ""
    Write-Warning "Copy the above GPG public key and add it to your GitHub account at:"
    Write-Warning "https://github.com/settings/gpg_keys"
    Write-Host ""
    
    # Test SSH connection
    Write-Status "Testing SSH connection to GitHub..."
    try {
        $sshTest = ssh -T git@github.com 2>&1
        if ($sshTest -match "successfully authenticated") {
            Write-Success "SSH connection to GitHub successful!"
        } else {
            Write-Warning "SSH connection test failed. This is normal if you haven't added the key to GitHub yet."
            Write-Warning "Add the SSH key to GitHub and run this script again to test the connection."
        }
    }
    catch {
        Write-Warning "SSH connection test failed. This is normal if you haven't added the key to GitHub yet."
    }
    
    # Create SSH config
    Write-Status "Creating SSH config..."
    $sshDir = "$env:USERPROFILE\.ssh"
    if (-not (Test-Path $sshDir)) {
        New-Item -ItemType Directory -Path $sshDir -Force | Out-Null
    }
    
    $sshConfigPath = "$sshDir\config"
    if (-not (Test-Path $sshConfigPath)) {
        $sshConfig = @"
# GitHub SSH Configuration
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/$sshKeyName
    IdentitiesOnly yes
"@
        $sshConfig | Out-File -FilePath $sshConfigPath -Encoding ASCII
        Write-Success "SSH config created"
    } else {
        # Check if GitHub config already exists
        $existingConfig = Get-Content $sshConfigPath -Raw
        if ($existingConfig -notmatch "Host github\.com") {
            $sshConfig = @"

# GitHub SSH Configuration
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/$sshKeyName
    IdentitiesOnly yes
"@
            Add-Content -Path $sshConfigPath -Value $sshConfig
            Write-Success "GitHub SSH config added to existing SSH config"
        } else {
            Write-Status "GitHub SSH config already exists"
        }
    }
    
    # Set proper permissions (Windows equivalent)
    Write-Status "Setting proper file permissions..."
    # On Windows, we'll use icacls to set permissions
    try {
        icacls "$sshDir" /inheritance:r /grant:r "$env:USERNAME:(F)" | Out-Null
        icacls $sshKeyPath /inheritance:r /grant:r "$env:USERNAME:(F)" | Out-Null
        icacls "$sshKeyPath.pub" /inheritance:r /grant:r "$env:USERNAME:(F)" | Out-Null
        icacls $sshConfigPath /inheritance:r /grant:r "$env:USERNAME:(F)" | Out-Null
        Write-Success "File permissions set correctly"
    }
    catch {
        Write-Warning "Could not set file permissions. This is normal on some Windows configurations."
    }
    
    # Create convenience script
    Write-Status "Creating convenience script..."
    $binDir = "$env:USERPROFILE\.local\bin"
    if (-not (Test-Path $binDir)) {
        New-Item -ItemType Directory -Path $binDir -Force | Out-Null
    }
    
    $statusScript = @"
# GitHub Keys Status Script
Write-Host "🔑 GitHub Keys Status" -ForegroundColor Cyan
Write-Host "====================" -ForegroundColor Cyan
Write-Host ""
Write-Host "SSH Keys:" -ForegroundColor Yellow
ssh-add -l
Write-Host ""
Write-Host "GPG Keys:" -ForegroundColor Yellow
gpg --list-secret-keys --keyid-format LONG
Write-Host ""
Write-Host "Git Configuration:" -ForegroundColor Yellow
Write-Host "User: $(git config --global user.name)"
Write-Host "Email: $(git config --global user.email)"
Write-Host "Signing Key: $(git config --global user.signingkey)"
Write-Host "Commit Signing: $(git config --global commit.gpgsign)"
Write-Host "Tag Signing: $(git config --global tag.gpgsign)"
"@
    
    $statusScript | Out-File -FilePath "$binDir\github-keys-status.ps1" -Encoding UTF8
    Write-Success "Convenience script created at $binDir\github-keys-status.ps1"
    
    Write-Host ""
    Write-Success "🎉 Setup complete! Here's what to do next:"
    Write-Host ""
    Write-Host "1. Add the SSH public key to GitHub:" -ForegroundColor White
    Write-Host "   https://github.com/settings/keys" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. Add the GPG public key to GitHub:" -ForegroundColor White
    Write-Host "   https://github.com/settings/gpg_keys" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. Test your setup by running:" -ForegroundColor White
    Write-Host "   .\github-keys-status.ps1" -ForegroundColor Gray
    Write-Host ""
    Write-Host "4. Clone a repository using SSH:" -ForegroundColor White
    Write-Host "   git clone git@github.com:$GitHubUsername/your-repo.git" -ForegroundColor Gray
    Write-Host ""
    Write-Host "5. Make a test commit to verify GPG signing works" -ForegroundColor White
    Write-Host ""
    Write-Warning "Remember to backup your private keys securely!"
}

# Run main function
try {
    Main
}
catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
    exit 1
}
