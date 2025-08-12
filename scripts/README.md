# Auto-Push Scripts for Summerlin West Homes

These scripts automatically commit and push all changes to git after every update.

## Available Scripts

### 1. PowerShell Script (`auto-push.ps1`)

**Recommended for Windows users**

**Features:**

- ✅ Color-coded output
- ✅ Error handling and validation
- ✅ Custom commit messages
- ✅ Git status checking
- ✅ Detailed progress reporting

**Usage:**

```powershell
# Run with default commit message
.\scripts\auto-push.ps1

# Run with custom commit message
.\scripts\auto-push.ps1 -CommitMessage "Custom message here"
```

### 2. Batch File (`auto-push.bat`)

**Simple alternative for Windows users**

**Features:**

- ✅ Simple execution
- ✅ Automatic timestamp in commit message
- ✅ Basic error checking
- ✅ Easy to run

**Usage:**

```cmd
# Double-click the file or run from command line
scripts\auto-push.bat
```

## How to Use

### **Option 1: Run from Project Root**

1. Navigate to your project root directory (`summerlinwesthomes.com`)
2. Run one of the scripts:

   ```bash
   # PowerShell (recommended)
   .\scripts\auto-push.ps1

   # Or Batch file
   scripts\auto-push.bat
   ```

### **Option 2: Add to PATH**

1. Copy the script to a directory in your PATH
2. Run from anywhere:
   ```bash
   auto-push
   ```

### **Option 3: Create Desktop Shortcut**

1. Right-click on the script file
2. Create shortcut
3. Move shortcut to desktop
4. Double-click to run

## What the Scripts Do

1. **📊 Check Status**: Verify you're in a git repository
2. **📦 Add Changes**: Stage all modified files (`git add .`)
3. **💾 Commit**: Create a commit with timestamp
4. **🚀 Push**: Send changes to GitHub (`git push origin main`)
5. **✅ Confirm**: Show success message and next steps

## After Running

- **Vercel** will automatically detect the new commit
- **Build process** will start immediately
- **Deployment** typically completes in 2-5 minutes
- **Your changes** will be live on the website

## Customization

### **PowerShell Script**

- Edit `auto-push.ps1` to modify commit message format
- Add additional git commands as needed
- Customize error handling and validation

### **Batch File**

- Edit `auto-push.bat` to change commit message format
- Add additional commands before or after git operations

## Troubleshooting

### **"Not in a git repository" Error**

- Make sure you're in the project root directory
- Verify `.git` folder exists

### **Permission Denied**

- Run PowerShell as Administrator
- Check file permissions

### **Git Authentication Issues**

- Ensure your git credentials are configured
- Check SSH keys or personal access tokens

## Pro Tips

1. **Run after every change** to keep your deployment current
2. **Use custom commit messages** for better tracking
3. **Check Vercel dashboard** to monitor deployment progress
4. **Keep scripts in your project** for easy access

## Safety Features

- ✅ **Error checking**: Scripts validate each step
- ✅ **Status reporting**: Shows what will be committed
- ✅ **Rollback safe**: Only pushes, doesn't delete anything
- ✅ **Repository validation**: Ensures you're in the right place

---

**Happy Auto-Pushing! 🚀**
