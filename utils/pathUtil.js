const path = require('path');

// Join paths
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log('Joined path:', fullPath);

// Resolve absolute path
const absolutePath = path.resolve('folder', 'file.txt');
console.log('Resolved path:', absolutePath);

// Get file extension
const ext = path.extname('example.js');
console.log('File extension:', ext);

// Parse a path
const parsed = path.parse('/home/user/docs/file.txt');
console.log('Parsed path:', parsed);


