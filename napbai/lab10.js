const fs = require('fs');

const filePath = 'thang.txt';

fs.closeSync(fs.openSync(filePath, 'w'));
console.log(`File ${filePath} has been closed.`);