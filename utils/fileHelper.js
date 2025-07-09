const fs = require('fs');
const path = require('path');

function writeNote(filename, text) {
    const filePath = path.join(__dirname, '../files', filename);
    fs.writeFile(filePath, text, (err) => {
        if (err) return console.error('Error:', err);
        console.log(`${filename} created.`);
    });
}

module.exports = { writeNote };
