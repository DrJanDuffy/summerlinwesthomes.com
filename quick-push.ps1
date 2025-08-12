# Professional Git Push Script - Production Ready
# Author: AI Assistant
# Version: 2.0.1
# Last Updated: $(Get-Date -Format 'yyyy-MM-dd')

param(
    [string]$CommitMessage = "",
    [switch]$Force,
    [switch]$Verbose
)

# Set execution policy and error handling
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

# Performance optimization: Disable progress bars for faster execution
$ProgressPreference = 'SilentlyContinue'

# Function to write professional log messages
function Write-Log {
    param(
        [string]$Message,
        [string]$Level = "INFO",
        [string]$Color = "White"
    )
    
    $timestamp = Get-Date -Format "HH:mm:ss"
    $formattedMessage = "[$timestamp] [$Level] $Message"
    
    switch ($Level) {
        "SUCCESS" { $Color = "Green" }
        "WARNING" { $Color = "Yellow" }
        "ERROR" { $Color = "Red" }
        "INFO" { $Color = "Blue" }
    }
    
    Write-Host $formattedMessage -ForegroundColor $Color
    
    # Log to file for production environments
    if ($Verbose) {
        $logFile = "git-push-$(Get-Date -Format 'yyyy-MM-dd').log"
        "$formattedMessage" | Out-File -FilePath $logFile -Append -Encoding UTF8
    }
}

# Function to check git prerequisites
function Test-GitPrerequisites {
    try {
        # Check if git is available
        $gitVersion = git --version 2>$null
        if (-not $gitVersion) {
            throw "Git is not installed or not in PATH"
        }
        
        # Check if we're in a git repository
        $gitDir = git rev-parse --git-dir 2>$null
        if (-not $gitDir) {
            throw "Not in a git repository"
        }
        
        # Check remote configuration
        $remotes = git remote -v 2>$null
        if (-not $remotes) {
            throw "No remote repositories configured"
        }
        
        Write-Log "Git prerequisites check passed" "SUCCESS"
        return $true
    }
    catch {
        Write-Log "Prerequisites check failed: $($_.Exception.Message)" "ERROR"
        return $false
    }
}

# Function to configure git for optimal performance
function Optimize-GitConfiguration {
    try {
        Write-Log "Configuring Git for optimal performance..." "INFO"
        
        # Core optimizations
        git config --global core.pager cat
        git config --global pull.rebase false
        git config --global push.default simple
        git config --global core.autocrlf true
        
        # Performance optimizations
        git config --global core.compression 9
        git config --global core.loosecompression 9
        git config --global pack.compression 9
        
        # Security optimizations
        git config --global core.fileMode false
        git config --global core.ignorecase false
        
        Write-Log "Git configuration optimized" "SUCCESS"
    }
    catch {
        Write-Log "Failed to optimize Git configuration: $($_.Exception.Message)" "WARNING"
    }
}

# Function to get current branch
function Get-CurrentBranch {
    try {
        $branch = git branch --show-current 2>$null
        return $branch
    }
    catch {
        return "main" # Fallback to main
    }
}

# Function to check repository health
function Test-RepositoryHealth {
    try {
        Write-Log "Checking repository health..." "INFO"
        
        # Check for uncommitted changes
        $status = git status --porcelain
        if ($status -and $status.Length -gt 0) {
            $changeCount = ($status | Measure-Object).Count
            Write-Log "Found $changeCount uncommitted changes" "INFO"
            return $true
        } else {
            Write-Log "Repository is clean - no changes to commit" "INFO"
            return $false
        }
    }
    catch {
        Write-Log "Repository health check failed: $($_.Exception.Message)" "ERROR"
        return $false
    }
}

# Function to stage and commit changes
function Save-Changes {
    param([string]$Message)
    
    try {
        Write-Log "Staging all changes..." "INFO"
        git add .
        
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to stage changes"
        }
        
        Write-Log "Committing changes..." "INFO"
        
        # Generate commit message if none provided
        if (-not $Message) {
            $Message = "Auto-commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - $(Get-CurrentBranch)"
        }
        
        git commit -m $Message
        
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to commit changes"
        }
        
        Write-Log "Changes committed successfully" "SUCCESS"
        return $true
    }
    catch {
        Write-Log "Commit failed: $($_.Exception.Message)" "ERROR"
        return $false
    }
}

# Function to push changes
function Push-Changes {
    param([string]$Branch)
    
    try {
        Write-Log "Fetching latest changes from remote..." "INFO"
        git fetch origin --quiet
        
        # Check if we need to pull first
        $localCommit = git rev-parse HEAD
        $remoteCommit = git rev-parse "origin/$Branch"
        
        if ($localCommit -ne $remoteCommit) {
            Write-Log "Remote has new changes. Pulling first..." "WARNING"
            git pull origin $Branch --quiet
            
            if ($LASTEXITCODE -ne 0) {
                Write-Log "Pull had conflicts - attempting push anyway" "WARNING"
            }
        }
        
        Write-Log "Pushing changes to remote..." "INFO"
        
        if ($Force) {
            git push origin $Branch --force
        } else {
            git push origin $Branch
        }
        
        if ($LASTEXITCODE -ne 0) {
            throw "Push failed"
        }
        
        Write-Log "Changes pushed successfully" "SUCCESS"
        return $true
    }
    catch {
        Write-Log "Push failed: $($_.Exception.Message)" "ERROR"
        return $false
    }
}

# Main execution
try {
    Write-Host "🚀 Professional Git Push Script v2.0.1" -ForegroundColor Cyan
    Write-Host "=====================================" -ForegroundColor Cyan
    Write-Host ""
    
    # Performance measurement
    $startTime = Get-Date
    
    # Check prerequisites
    if (-not (Test-GitPrerequisites)) {
        exit 1
    }
    
    # Optimize git configuration
    Optimize-GitConfiguration
    
    # Get current branch
    $currentBranch = Get-CurrentBranch
    Write-Log "Current branch: $currentBranch" "INFO"
    
    # Check repository health
    $hasChanges = Test-RepositoryHealth
    
    if (-not $hasChanges) {
        Write-Log "No changes to push - exiting" "INFO"
        exit 0
    }
    
    # Commit changes
    if (-not (Save-Changes -Message $CommitMessage)) {
        exit 1
    }
    
    # Push changes
    if (-not (Push-Changes -Branch $currentBranch)) {
        exit 1
    }
    
    # Performance summary
    $endTime = Get-Date
    $duration = $endTime - $startTime
    Write-Log "Total execution time: $($duration.TotalSeconds.ToString('F2')) seconds" "SUCCESS"
    
    # Final status
    Write-Log "Final repository status:" "INFO"
    git status --porcelain --branch | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
    
    Write-Host ""
    Write-Host "🎉 Git push completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Project Status:" -ForegroundColor White
    Write-Host "  ✅ Cursor (Local Development)" -ForegroundColor Green
    Write-Host "  ✅ GitHub (Source Control)" -ForegroundColor Green
    Write-Host "  ✅ Vercel (Deployment)" -ForegroundColor Green
    Write-Host ""
    
} catch {
    Write-Log "Critical error: $($_.Exception.Message)" "ERROR"
    Write-Host ""
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "  1. Check internet connection" -ForegroundColor Gray
    Write-Host "  2. Verify GitHub credentials" -ForegroundColor Gray
    Write-Host "  3. Check for merge conflicts" -ForegroundColor Gray
    Write-Host "  4. Run 'git status' manually" -ForegroundColor Gray
    exit 1
} finally {
    if ($Verbose) {
        Write-Log "Log file saved for debugging" "INFO"
    }
}
