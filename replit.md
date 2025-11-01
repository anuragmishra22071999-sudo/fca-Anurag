# fca-anurag

## Package Info
- **Name**: fca-anurag
- **Version**: 19.0.1
- **Author**: Anurag Mishra
- **License**: MIT
- **Repository**: https://github.com/anuragmishra22071999-sudo/fca-anurag.git

## Description
Facebook Chat API for building Messenger bots. Rebranded version of fca-priyansh.

## Installation
```bash
npm install fca-anurag
```

## Basic Usage
```javascript
const login = require("fca-anurag");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
```

## Publishing to npm
```bash
npm login
npm publish
```

## Project Status
✅ Package ready for distribution
- All branding updated to fca-anurag
- Dependencies installed and tested
- Ready for GitHub push and npm publish
