const fs = require('fs');
const path = require('path');

// Write to a file inside /files
function writeToFile(filename, content) {
  const filePath = path.join(__dirname, '../files', filename);
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Write error:', err);
    } else {
      console.log(`${filename} created successfully.`);
    }
  });
}

function readFromFile(filename){
    const filePath = path.join(__dirname, '../files', filename);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.error('Read error:', err);
        } else {
             console.log(`Contents of ${filename}:`, data); // ✅ Use `data`, not `content`
        }
    })
}

// Read from a file inside /files



module.exports = { writeToFile, readFromFile };
