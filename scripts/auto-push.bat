@echo off
echo 🚀 Auto-Push Script Starting...
echo ===============================================

REM Check if we're in a git repository
if not exist ".git" (
    echo ❌ Error: Not in a git repository!
    echo Please run this script from your project root directory.
    pause
    exit /b 1
)

REM Add all changes
echo 📦 Adding all changes...
git add .

REM Commit changes with timestamp
echo 💾 Committing changes...
git commit -m "Auto-commit: %date% %time% - Updates and improvements"

REM Push to remote
echo 🚀 Pushing to remote repository...
git push origin main

REM Success message
echo ===============================================
echo ✅ Auto-Push Completed Successfully!
echo 🔄 Vercel will automatically deploy your changes
echo ⏱️  Deployment typically takes 2-5 minutes
echo ===============================================

pause
