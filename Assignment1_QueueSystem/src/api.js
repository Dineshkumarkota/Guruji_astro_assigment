const express = require('express');
const bodyParser = require('body-parser');
const { authenticateUser } = require('./auth'); // User authentication
const { enqueueRequest, processQueue } = require('./queue'); // Queue management

const app = express();
app.use(bodyParser.json());

// User authentication endpoint
app.post('/login', authenticateUser);

// Enqueue requests
app.post('/request', (req, res) => {
    const { userId, requestData } = req.body;
    const result = enqueueRequest(userId, requestData);
    res.json(result);
});

// Start processing the queue
setInterval(processQueue, 1000); // Process requests every second

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
