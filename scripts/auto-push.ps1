# Auto-Push Script for Summerlin West Homes
# Automatically commits and pushes all changes to git

param(
    [string]$CommitMessage = "Auto-commit: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') - Updates and improvements"
)

Write-Host "🚀 Auto-Push Script Starting..." -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Cyan

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Not in a git repository!" -ForegroundColor Red
    Write-Host "Please run this script from your project root directory." -ForegroundColor Yellow
    exit 1
}

# Check git status
Write-Host "📊 Checking git status..." -ForegroundColor Yellow
$status = git --no-pager status --porcelain 2>&1

if (-not $status) {
    Write-Host "✅ No changes to commit. Working tree is clean." -ForegroundColor Green
    exit 0
}

# Show what will be committed
Write-Host "📝 Changes detected:" -ForegroundColor Yellow
git --no-pager status --short 2>&1

# Add all changes
Write-Host "📦 Adding all changes..." -ForegroundColor Yellow
git add . 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error: Failed to add changes!" -ForegroundColor Red
    exit 1
}

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m $CommitMessage 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error: Failed to commit changes!" -ForegroundColor Red
    exit 1
}

# Push to remote
Write-Host "🚀 Pushing to remote repository..." -ForegroundColor Yellow
git push origin main 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error: Failed to push changes!" -ForegroundColor Red
    exit 1
}

# Success message
Write-Host "===============================================" -ForegroundColor Cyan
Write-Host "✅ Auto-Push Completed Successfully!" -ForegroundColor Green
Write-Host "📅 Commit: $CommitMessage" -ForegroundColor Cyan
Write-Host "🔄 Vercel will automatically deploy your changes" -ForegroundColor Yellow
Write-Host "⏱️  Deployment typically takes 2-5 minutes" -ForegroundColor Yellow
Write-Host "===============================================" -ForegroundColor Cyan

# Show recent commit
Write-Host "📋 Recent commit details:" -ForegroundColor Yellow
git --no-pager log --oneline -1 2>&1
