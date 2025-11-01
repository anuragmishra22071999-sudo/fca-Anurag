// Demo script for fca-anurag package
console.log("========================================");
console.log("  fca-anurag Package Information");
console.log("========================================\n");

const pkg = require('./package.json');

console.log("📦 Package Name:", pkg.name);
console.log("📌 Version:", pkg.version);
console.log("👤 Author:", pkg.author);
console.log("📝 Description:", pkg.description);
console.log("🔗 Repository:", pkg.repository.url);
console.log("📄 License:", pkg.license);

console.log("\n========================================");
console.log("  Package Structure");
console.log("========================================\n");

const fca = require('./index.js');
console.log("✓ Package loaded successfully!");
console.log("✓ Main module exports:", typeof fca);

console.log("\n========================================");
console.log("  Installation Instructions");
console.log("========================================\n");

console.log("To install this package:");
console.log("  npm install fca-anurag");

console.log("\nBasic usage:");
console.log(`
const login = require("fca-anurag");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);
    
    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});
`);

console.log("\n========================================");
console.log("  Dependencies Installed");
console.log("========================================\n");

const deps = Object.keys(pkg.dependencies);
console.log(`Total dependencies: ${deps.length}`);
console.log("Key dependencies:");
console.log("  - mqtt (for Facebook messaging)");
console.log("  - cheerio (for HTML parsing)");
console.log("  - crypto-js (for encryption)");
console.log("  - express (for web server)");
console.log("  - better-sqlite3 (for database)");

console.log("\n========================================");
console.log("  Next Steps");
console.log("========================================\n");

console.log("1. Push code to GitHub:");
console.log("   Repository: https://github.com/anuragmishra22071999-sudo/fca-anurag.git");
console.log("\n2. Publish to npm:");
console.log("   npm login");
console.log("   npm publish");
console.log("\n3. Start using the package in your projects!");

console.log("\n✅ Package is ready for distribution!\n");
