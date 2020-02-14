const fs = require('fs');

const files = fs.readFileSync('./index.html', 'utf-8');

console.log(files);


