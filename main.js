const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateKey() {
    return crypto.randomBytes(32).toString('hex');
}

function encryptMessage(message, key) {
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), crypto.randomBytes(16));
    let encryptedMessage = cipher.update(message, 'utf-8', 'hex');
    encryptedMessage += cipher.final('hex');
    return encryptedMessage;
}

function decryptMessage(encryptedMessage, key) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), crypto.randomBytes(16));
    let decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8');
    decryptedMessage += decipher.final('utf-8');
    return decryptedMessage;
}

