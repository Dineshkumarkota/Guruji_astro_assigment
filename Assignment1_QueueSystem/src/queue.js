const queue = {}; // Store queues for users

const enqueueRequest = (userId, requestData) => {
    if (!queue[userId]) {
        queue[userId] = [];
    }
    queue[userId].push(requestData);
    return { message: `Request added to user ${userId}'s queue` };
};

const processQueue = () => {
    for (const userId in queue) {
        const requests = queue[userId];
        if (requests.length > 0) {
            const request = requests.shift(); // Process the first request
            console.log(`Processing request for user ${userId}:`, request);
        }
    }
};

module.exports = { enqueueRequest, processQueue };
