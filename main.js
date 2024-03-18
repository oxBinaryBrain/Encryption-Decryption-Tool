const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateKey() {
    return crypto.randomBytes(32).toString('hex');
}
