# Simple Git Push Script - No Pager Issues - Test Run 3
Write-Host "Quick Git Push Starting..." -ForegroundColor Green

# Configure git to avoid pager
git config --global core.pager cat

# Check if there are changes
$changes = git status --porcelain
if ($changes) {
    Write-Host "Changes found, proceeding with push..." -ForegroundColor Yellow
    
    # Add, commit, and push
    git add .
    git commit -m "Quick update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    git push origin main
    
    Write-Host "Push completed!" -ForegroundColor Green
} else {
    Write-Host "No changes to push" -ForegroundColor Blue
}

Write-Host "Done!" -ForegroundColor Green
