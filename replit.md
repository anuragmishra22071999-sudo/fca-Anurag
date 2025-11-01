# fca-anurag

## Overview
This is a Facebook Chat API package (fca-anurag) created by Anurag Mishra. It's a rebranded version of the fca-priyansh package with all references updated to reflect the new package name and author.

## Project Details
- **Package Name**: fca-anurag
- **Version**: 19.0.1
- **Author**: Anurag Mishra
- **License**: MIT
- **Repository**: https://github.com/anuragmishra22071999-sudo/fca-anurag.git

## Recent Changes
- **2025-11-01**: Created fca-anurag package by downloading fca-priyansh v19.0.1 from npm registry
- **2025-11-01**: Replaced all instances of "fca-priyansh" with "fca-anurag" throughout the codebase
- **2025-11-01**: Updated package.json with new package name, author (Anurag Mishra), and repository URL
- **2025-11-01**: Updated README.md and all documentation files with new package references
- **2025-11-01**: Installed and tested all dependencies successfully

## Project Structure
```
fca-anurag/
├── Extra/              # Extra utilities and addons
├── Func/               # Additional functions
├── Language/           # Language files
├── src/                # Main source code (API functions)
├── test/               # Test files
├── index.js            # Main entry point
├── Main.js             # Core functionality
├── utils.js            # Utility functions
├── package.json        # Package configuration
├── README.md           # Documentation
└── LICENSE             # MIT License
```

## Installation
```bash
npm install fca-anurag
```

## Basic Usage
```javascript
const login = require("fca-anurag");

// Create simple echo bot
login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
```

## How to Push to GitHub

Since Git operations are restricted in this environment, follow these steps to push the code to your GitHub repository:

### Option 1: Using GitHub Web Interface
1. Go to https://github.com/anuragmishra22071999-sudo/fca-anurag
2. Click on "uploading an existing file" or "Add file" > "Upload files"
3. Download all files from this Replit project
4. Upload them to your GitHub repository

### Option 2: Using Git from Your Local Machine
1. Download all files from this Replit project
2. Open terminal on your local machine
3. Run the following commands:

```bash
# Navigate to your download folder
cd /path/to/downloaded/files

# Initialize Git if not already initialized
git init

# Add the remote repository
git remote add origin https://github.com/anuragmishra22071999-sudo/fca-anurag.git

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit: fca-anurag package v19.0.1"

# Push to GitHub
git push -u origin main
```

### Option 3: Clone and Copy (Recommended)
1. Clone the repository on your local machine:
   ```bash
   git clone https://github.com/anuragmishra22071999-sudo/fca-anurag.git
   cd fca-anurag
   ```

2. Download all files from this Replit project and copy them to the cloned directory

3. Commit and push:
   ```bash
   git add .
   git commit -m "Initial commit: fca-anurag package v19.0.1"
   git push origin main
   ```

## Publishing to npm

Once the code is pushed to GitHub, you can publish the package to npm:

1. Create an npm account at https://www.npmjs.com if you don't have one

2. Login to npm from your local machine:
   ```bash
   npm login
   ```

3. Publish the package:
   ```bash
   npm publish
   ```

## Testing
Run tests using:
```bash
npm test
```

Note: You'll need to create a `test-config.json` file in the `test` directory with your Facebook credentials for testing.

## User Preferences
- Language: JavaScript (Node.js)
- Package Manager: npm
- License: MIT
- Node Version: >=20.x <22.x
