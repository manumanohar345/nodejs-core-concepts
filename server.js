
require('dotenv').config(); // load variables from .env
const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/user');
const userRoutes1 = require('./routes/userRoutes');
// const fs = require('fs');
const { writeNote } = require('./utils/fileHelper');
const { writeToFile, readFromFile } = require('./utils/fileHandler');
const formRoutes = require('./routes/formRoute');
writeNote('notes.txt', 'This is a note created using fs!');

writeToFile('sample.txt', 'Hello from Node.js!');
readFromFile('sample.txt');


// Custom middleware
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Don't forget this!
}

function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  const expectedToken = process.env.AUTH_TOKEN; // from .env
  if (token === expectedToken) {
    next();
  } else {
    res.status(403).send('Forbidden');
  }
}

// Use middleware globally
app.use(logger);

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (like HTML) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Use form route
app.use('/form', formRoutes);

app.use('/api/users1', userRoutes1);

// Apply only to /secure route
app.get('/secure', authMiddleware, (req, res) => {
  res.send('You are authorized');
});

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
