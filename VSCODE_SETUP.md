# VS Code Setup Guide for Summerlin West Homes Project

## 🚀 Installed Extensions

All necessary VS Code extensions have been installed and configured:

- **ES7+ React/Redux/React-Native snippets** - React code snippets and shortcuts
- **Tailwind CSS IntelliSense** - Tailwind CSS autocomplete and validation
- **Prettier** - Code formatting with automatic save formatting
- **ESLint** - Code linting and error detection
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Path Intellisense** - Autocomplete for file paths

## ⚙️ Configuration

### Format on Save

- ✅ Enabled automatically
- Prettier will format your code every time you save a file
- ESLint will auto-fix issues on save

### Prettier + ESLint Integration

- ✅ Fully configured and working
- No conflicts between Prettier and ESLint
- Consistent code style across the project

## 🎯 Key Features

### React Development

- Use `rafce` snippet to create React functional components
- Use `rafc` snippet to create React functional components with props
- Use `rcc` snippet to create React class components

### Tailwind CSS

- Full IntelliSense support for Tailwind classes
- Automatic validation of Tailwind syntax
- Smart suggestions based on your project's configuration

### Code Quality

- Real-time ESLint error detection
- Automatic import organization
- Consistent code formatting

## 🛠️ Available Tasks

Press `Ctrl+Shift+P` and type "Tasks: Run Task" to access:

- **npm: dev** - Start development server
- **npm: build** - Build for production
- **npm: lint** - Run ESLint
- **npm: lint:fix** - Fix ESLint issues automatically
- **npm: format** - Format code with Prettier
- **npm: type-check** - Run TypeScript type checking

## 🔧 Keyboard Shortcuts

- `Ctrl+Shift+P` - Command Palette
- `Ctrl+Shift+F` - Format Document
- `Ctrl+Shift+L` - Select all occurrences
- `Alt+Shift+F` - Format Selection
- `Ctrl+K Ctrl+F` - Format Selection

## 📁 Project Structure

The VS Code workspace is configured to:

- Exclude build folders and node_modules from search
- Provide proper TypeScript support
- Enable debugging for Next.js applications
- Support both client and server-side debugging

## 🚨 Troubleshooting

If you encounter issues:

1. **Restart VS Code** after installing extensions
2. **Check the Output panel** for extension errors
3. **Verify Prettier is the default formatter** for your file types
4. **Ensure ESLint is working** by checking the Problems panel

## 🎉 Ready to Code!

Your VS Code environment is now fully configured for optimal Next.js and React development. Enjoy coding your Summerlin West Homes real estate website!
