const express = require('express');
const app = express();
const port = 3000;

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID from path: ${userId}`);
});

app.get('/search', (req, res) => {
    const { name, age } = req.query;
    res.send(`Search query - Name: ${name}, Age: ${age}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
