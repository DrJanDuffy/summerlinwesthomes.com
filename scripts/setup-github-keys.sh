#!/bin/bash

# GitHub SSH and GPG Key Setup Automation Script
# This script automates the entire process of setting up SSH and GPG keys for GitHub

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to get user input with default value
get_input() {
    local prompt="$1"
    local default="$2"
    local input
    
    if [ -n "$default" ]; then
        read -p "$prompt [$default]: " input
        echo "${input:-$default}"
    else
        read -p "$prompt: " input
        echo "$input"
    fi
}

# Function to check if SSH key already exists
check_ssh_key_exists() {
    local key_name="$1"
    if [ -f "$HOME/.ssh/$key_name" ]; then
        return 0
    else
        return 1
    fi
}

# Function to check if GPG key already exists
check_gpg_key_exists() {
    local email="$1"
    if gpg --list-secret-keys "$email" >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Main setup function
main() {
    echo "🚀 GitHub SSH and GPG Key Setup Automation"
    echo "=========================================="
    echo ""
    
    # Check prerequisites
    print_status "Checking prerequisites..."
    
    if ! command_exists ssh-keygen; then
        print_error "ssh-keygen not found. Please install OpenSSH."
        exit 1
    fi
    
    if ! command_exists gpg; then
        print_error "gpg not found. Please install GPG."
        exit 1
    fi
    
    if ! command_exists git; then
        print_error "git not found. Please install Git."
        exit 1
    fi
    
    print_success "All prerequisites are installed"
    echo ""
    
    # Get user information
    print_status "Collecting user information..."
    
    local name=$(get_input "Enter your full name" "$(git config --global user.name 2>/dev/null || echo '')")
    local email=$(get_input "Enter your email address" "$(git config --global user.email 2>/dev/null || echo '')")
    local github_username=$(get_input "Enter your GitHub username" "")
    
    if [ -z "$name" ] || [ -z "$email" ] || [ -z "$github_username" ]; then
        print_error "All fields are required"
        exit 1
    fi
    
    # Set Git global configuration
    print_status "Setting Git global configuration..."
    git config --global user.name "$name"
    git config --global user.email "$email"
    print_success "Git configuration updated"
    echo ""
    
    # SSH Key Setup
    print_status "Setting up SSH key..."
    
    local ssh_key_name="id_ed25519_github"
    local ssh_key_path="$HOME/.ssh/$ssh_key_name"
    
    if check_ssh_key_exists "$ssh_key_name"; then
        print_warning "SSH key already exists at $ssh_key_path"
        local overwrite=$(get_input "Do you want to overwrite it? (y/N)" "N")
        if [[ "$overwrite" =~ ^[Yy]$ ]]; then
            rm -f "$ssh_key_path" "$ssh_key_path.pub"
        else
            print_status "Using existing SSH key"
        fi
    fi
    
    if [ ! -f "$ssh_key_path" ]; then
        print_status "Generating new SSH key..."
        ssh-keygen -t ed25519 -C "$email" -f "$ssh_key_path" -N ""
        print_success "SSH key generated"
    fi
    
    # Start ssh-agent and add key
    print_status "Starting SSH agent and adding key..."
    eval "$(ssh-agent -s)"
    ssh-add "$ssh_key_path"
    print_success "SSH key added to agent"
    
    # Display public key
    echo ""
    print_status "Your SSH public key (add this to GitHub):"
    echo "================================================"
    cat "$ssh_key_path.pub"
    echo ""
    print_warning "Copy the above SSH public key and add it to your GitHub account at:"
    print_warning "https://github.com/settings/keys"
    echo ""
    
    # GPG Key Setup
    print_status "Setting up GPG key..."
    
    if check_gpg_key_exists "$email"; then
        print_warning "GPG key already exists for $email"
        local overwrite=$(get_input "Do you want to create a new one? (y/N)" "N")
        if [[ "$overwrite" =~ ^[Yy]$ ]]; then
            print_status "Removing existing GPG key..."
            local key_id=$(gpg --list-secret-keys --keyid-format LONG "$email" | grep 'sec' | head -1 | awk '{print $2}' | cut -d'/' -f2)
            gpg --delete-secret-key "$key_id"
            gpg --delete-key "$key_id"
        fi
    fi
    
    if ! check_gpg_key_exists "$email"; then
        print_status "Generating new GPG key..."
        
        # Create GPG configuration
        cat > /tmp/gpg-batch << EOF
Key-Type: RSA
Key-Length: 4096
Subkey-Type: RSA
Subkey-Length: 4096
Name-Real: $name
Name-Email: $email
Expire-Date: 0
%commit
EOF
        
        gpg --batch --generate-key /tmp/gpg-batch
        rm -f /tmp/gpg-batch
        print_success "GPG key generated"
    fi
    
    # Get GPG key ID
    local gpg_key_id=$(gpg --list-secret-keys --keyid-format LONG "$email" | grep 'sec' | head -1 | awk '{print $2}' | cut -d'/' -f2)
    
    # Configure Git to use GPG signing
    print_status "Configuring Git to use GPG signing..."
    git config --global user.signingkey "$gpg_key_id"
    git config --global commit.gpgsign true
    git config --global tag.gpgsign true
    print_success "Git configured for GPG signing"
    
    # Display GPG public key
    echo ""
    print_status "Your GPG public key (add this to GitHub):"
    echo "================================================"
    gpg --armor --export "$gpg_key_id"
    echo ""
    print_warning "Copy the above GPG public key and add it to your GitHub account at:"
    print_warning "https://github.com/settings/gpg_keys"
    echo ""
    
    # Test SSH connection
    print_status "Testing SSH connection to GitHub..."
    if ssh -T git@github.com 2>&1 | grep -q "successfully authenticated"; then
        print_success "SSH connection to GitHub successful!"
    else
        print_warning "SSH connection test failed. This is normal if you haven't added the key to GitHub yet."
        print_warning "Add the SSH key to GitHub and run this script again to test the connection."
    fi
    
    # Create SSH config
    print_status "Creating SSH config..."
    mkdir -p "$HOME/.ssh"
    
    if [ ! -f "$HOME/.ssh/config" ]; then
        cat > "$HOME/.ssh/config" << EOF
# GitHub SSH Configuration
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/$ssh_key_name
    IdentitiesOnly yes
EOF
        print_success "SSH config created"
    else
        # Check if GitHub config already exists
        if ! grep -q "Host github.com" "$HOME/.ssh/config"; then
            cat >> "$HOME/.ssh/config" << EOF

# GitHub SSH Configuration
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/$ssh_key_name
    IdentitiesOnly yes
EOF
            print_success "GitHub SSH config added to existing SSH config"
        else
            print_status "GitHub SSH config already exists"
        fi
    fi
    
    # Set proper permissions
    print_status "Setting proper file permissions..."
    chmod 700 "$HOME/.ssh"
    chmod 600 "$HOME/.ssh/$ssh_key_name"
    chmod 644 "$HOME/.ssh/$ssh_key_name.pub"
    chmod 600 "$HOME/.ssh/config"
    print_success "File permissions set correctly"
    
    # Create convenience script
    print_status "Creating convenience script..."
    cat > "$HOME/.local/bin/github-keys-status" << 'EOF'
#!/bin/bash
echo "🔑 GitHub Keys Status"
echo "===================="
echo ""
echo "SSH Keys:"
ssh-add -l
echo ""
echo "GPG Keys:"
gpg --list-secret-keys --keyid-format LONG
echo ""
echo "Git Configuration:"
echo "User: $(git config --global user.name)"
echo "Email: $(git config --global user.email)"
echo "Signing Key: $(git config --global user.signingkey)"
echo "Commit Signing: $(git config --global commit.gpgsign)"
echo "Tag Signing: $(git config --global tag.gpgsign)"
EOF
    
    chmod +x "$HOME/.local/bin/github-keys-status"
    print_success "Convenience script created at ~/.local/bin/github-keys-status"
    
    echo ""
    print_success "🎉 Setup complete! Here's what to do next:"
    echo ""
    echo "1. Add the SSH public key to GitHub:"
    echo "   https://github.com/settings/keys"
    echo ""
    echo "2. Add the GPG public key to GitHub:"
    echo "   https://github.com/settings/gpg_keys"
    echo ""
    echo "3. Test your setup by running:"
    echo "   github-keys-status"
    echo ""
    echo "4. Clone a repository using SSH:"
    echo "   git clone git@github.com:$github_username/your-repo.git"
    echo ""
    echo "5. Make a test commit to verify GPG signing works"
    echo ""
    print_warning "Remember to backup your private keys securely!"
}

# Run main function
main "$@"
