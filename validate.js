// Validation script for fca-anurag package
const pkg = require('./package.json');

console.log('✓ fca-anurag package validation');
console.log('  Package:', pkg.name);
console.log('  Version:', pkg.version);
console.log('  Author:', pkg.author);

try {
    const fca = require('./index.js');
    console.log('✓ Module loaded successfully');
    console.log('\nPackage ready for npm publish!');
} catch(e) {
    console.error('✗ Error loading module:', e.message);
    process.exit(1);
}
