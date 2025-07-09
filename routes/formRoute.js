const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.post(
    '/submit',
    [
        body('username')
            .trim()
            .notEmpty().withMessage('Username is required')
            .isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
        body('email')
            .isEmail().withMessage('Enter a valid email address')
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email } = req.body;
        res.send(`<h3>Hello, ${username}!</h3><p>Email: ${email}</p>`);
    }
);

module.exports = router;
