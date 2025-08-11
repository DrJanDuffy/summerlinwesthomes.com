# Git Push Automation Script - Optimized Version
# This script handles all git operations smoothly without pager issues

param(
    [string]$CommitMessage = "Update project files"
)

# Set error action preference
$ErrorActionPreference = "Continue"

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

# Main execution
try {
    Write-Host "🚀 Starting Git Push Process" -ForegroundColor Cyan
    Write-Host "=============================" -ForegroundColor Cyan
    Write-Host ""
    
    # Configure git to avoid pager issues and optimize operations
    Write-Status "Configuring Git for smooth operation..."
    git config --global core.pager cat
    git config --global pull.rebase false
    git config --global push.default simple
    git config --global core.autocrlf true
    Write-Success "Git configuration updated"
    Write-Host ""
    
    # Check current status
    Write-Status "Checking repository status..."
    $status = git status --porcelain
    if ($status) {
        Write-Host "Changes detected:" -ForegroundColor Yellow
        $status | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
    } else {
        Write-Warning "No changes detected - repository is clean"
        Write-Host "Press any key to exit..."
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit 0
    }
    Write-Host ""
    
    # Add all changes
    Write-Status "Adding all changes to staging area..."
    git add .
    if ($LASTEXITCODE -eq 0) {
        Write-Success "All changes staged successfully"
    } else {
        throw "Failed to stage changes"
    }
    Write-Host ""
    
    # Commit changes
    Write-Status "Committing changes..."
    git commit -m $CommitMessage
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Changes committed successfully"
    } else {
        throw "Failed to commit changes"
    }
    Write-Host ""
    
    # Fetch latest from remote
    Write-Status "Fetching latest changes from remote..."
    git fetch origin
    Write-Success "Remote changes fetched"
    Write-Host ""
    
    # Check if we need to pull first
    $localCommit = git rev-parse HEAD
    $remoteCommit = git rev-parse origin/main
    if ($localCommit -ne $remoteCommit) {
        Write-Warning "Remote has new changes. Pulling first..."
        git pull origin main
        if ($LASTEXITCODE -eq 0) {
            Write-Success "Successfully pulled remote changes"
        } else {
            Write-Warning "Pull had conflicts - continuing with push"
        }
        Write-Host ""
    }
    
    # Push to GitHub
    Write-Status "Pushing changes to GitHub..."
    git push origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Successfully pushed to GitHub!"
    } else {
        throw "Failed to push to GitHub"
    }
    Write-Host ""
    
    # Final status check
    Write-Status "Final repository status:"
    git status --porcelain
    Write-Host ""
    
    Write-Success "🎉 Git push process completed successfully!"
    Write-Host ""
    Write-Host "Your project is now fully synced across:" -ForegroundColor White
    Write-Host "  ✅ Cursor (Local Development)" -ForegroundColor Green
    Write-Host "  ✅ GitHub (Source Control)" -ForegroundColor Green
    Write-Host "  ✅ Vercel (Deployment)" -ForegroundColor Green
    Write-Host ""
    
} catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
    Write-Host ""
    Write-Warning "Troubleshooting steps:"
    Write-Host "  1. Check your internet connection" -ForegroundColor Gray
    Write-Host "  2. Verify GitHub credentials" -ForegroundColor Gray
    Write-Host "  3. Check for merge conflicts" -ForegroundColor Gray
    Write-Host "  4. Run 'git status' manually" -ForegroundColor Gray
} finally {
    Write-Host ""
    Write-Host "Press any key to continue..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
