
const fs = require('fs');
 
const buffer = fs.readFile(process.argv[2]);
 
const str = buffer.toString();
 
const tab = str.split('\n');
 
console.log(tab.length -1);

