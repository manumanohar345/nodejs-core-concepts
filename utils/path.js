// Path module examples
const path = require('path');

// Example: Get file extension
const ext = path.extname('notes.txt');
console.log('File extension:', ext); // Output: .txt

// Example: Get file name
const fileName = path.basename('public/form.html');
console.log('File name:', fileName); // Output: form.html

// Example: Get directory name
const dirName = path.dirname('public/form.html');
console.log('Directory name:', dirName); // Output: public

// Example: Join paths
const fullPath = path.join('public', 'form.html');
console.log('Joined path:', fullPath); // Output: public\form.html

// Example: Resolve absolute path
const absPath = path.resolve('public/form.html');
console.log('Absolute path:', absPath); // Output: C:\...\public\form.html
