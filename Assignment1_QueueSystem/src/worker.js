const queue = [];

function enqueueRequest(user, request) {
    queue.push({ user, request });
}

function processQueue() {
    if (queue.length > 0) {
        const { user, request } = queue.shift(); // FIFO
        console.log(`Processing request for user ${user}: ${request}`);
        // Here you can add logic to handle the request
    } else {
        console.log('Queue is empty');
    }
}

module.exports = { enqueueRequest, processQueue };
