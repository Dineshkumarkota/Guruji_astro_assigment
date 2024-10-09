const jwt = require('jsonwebtoken');

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

const authenticateUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: 'Authentication failed' });
};

module.exports = { authenticateUser };
