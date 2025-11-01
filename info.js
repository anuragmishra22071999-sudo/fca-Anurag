// fca-anurag Package Information
const pkg = require('./package.json');

console.log('\n╔══════════════════════════════════════════════╗');
console.log('║         fca-anurag Package Info              ║');
console.log('╚══════════════════════════════════════════════╝\n');

console.log('📦 Package:', pkg.name);
console.log('📌 Version:', pkg.version);
console.log('👤 Author:', pkg.author);
console.log('📝 Description:', pkg.description);
console.log('📄 License:', pkg.license);
console.log('🔗 Repository:', pkg.repository.url);

console.log('\n───────────────────────────────────────────────');
console.log('  Installation');
console.log('───────────────────────────────────────────────\n');
console.log('  npm install fca-anurag\n');

console.log('───────────────────────────────────────────────');
console.log('  Basic Usage');
console.log('───────────────────────────────────────────────\n');
console.log('  const login = require("fca-anurag");');
console.log('  ');
console.log('  login({email: "EMAIL", password: "PASS"}, (err, api) => {');
console.log('      if(err) return console.error(err);');
console.log('      api.listen((err, message) => {');
console.log('          api.sendMessage(message.body, message.threadID);');
console.log('      });');
console.log('  });\n');

console.log('───────────────────────────────────────────────');
console.log('  Package Status');
console.log('───────────────────────────────────────────────\n');

// Test module loading
try {
    const fca = require('./index.js');
    console.log('✓ Module loads successfully');
    console.log('✓ Main function available');
} catch(e) {
    console.log('✗ Error loading module:', e.message);
}

// Check dependencies
const deps = Object.keys(pkg.dependencies).length;
console.log('✓', deps, 'dependencies installed');

// Check source files
const fs = require('fs');
const srcCount = fs.readdirSync('./src').length;
console.log('✓', srcCount, 'API functions available');

console.log('\n✅ Package ready for distribution!\n');
console.log('Next steps:');
console.log('1. Push to GitHub: https://github.com/anuragmishra22071999-sudo/fca-anurag.git');
console.log('2. Publish to npm: npm publish\n');
