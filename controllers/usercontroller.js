const fs = require('fs');
const path = require('path');

// const filePath = path.join(__dirname, '../data/users.json');
let users = require('../data/users.json');

// GET all users
exports.getUsers = (req, res) => {
    res.json(users);
};

// GET user by ID
exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).json({ error: 'User not found' });
};

// POST new user
exports.createUser = (req, res) => {
    const { name } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
    };
    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.status(201).json(newUser);
};

// PUT update user
exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.name = req.body.name;
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.json(user);
};

// DELETE user
exports.deleteUser = (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.json({ message: 'User deleted' });
};
