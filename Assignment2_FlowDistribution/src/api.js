const express = require('express');
const bodyParser = require('body-parser');
const { registerUser, connectUser } = require('./flowDistribution');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// Endpoint to register a user
app.post('/register', (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    const message = registerUser(userId);
    res.status(201).json({ message });
});

// Endpoint to connect a user to an astrologer
app.post('/connect', (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }
    const message = connectUser(userId);
    res.status(200).json({ message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
