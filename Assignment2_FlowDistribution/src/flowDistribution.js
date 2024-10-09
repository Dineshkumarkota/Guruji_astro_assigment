const users = [];
const astrologers = [1, 2, 3, 4, 5]; // Example astrologers
const flowDistribution = {};

const registerUser = (userId) => {
    if (!users.includes(userId)) {
        users.push(userId);
        flowDistribution[userId] = { connectedAstrologer: null };
        return 'User registered successfully!';
    }
    return 'User already registered.';
};

const connectUser = (userId) => {
    if (!users.includes(userId)) {
        return 'User not registered.';
    }
    
    const astrologer = selectAstrologer();
    flowDistribution[userId].connectedAstrologer = astrologer;

    return `Connected to Astrologer ${astrologer}`;
};

// Function to select an astrologer based on flow distribution
const selectAstrologer = () => {
    const counts = {};
    astrologers.forEach(astrologer => counts[astrologer] = 0);

    // Count how many users are connected to each astrologer
    for (const userId in flowDistribution) {
        const connectedAstrologer = flowDistribution[userId].connectedAstrologer;
        if (connectedAstrologer) {
            counts[connectedAstrologer]++;
        }
    }

    // Find the astrologer with the least connections
    let leastConnected = astrologers[0];
    for (const astrologer of astrologers) {
        if (counts[astrologer] < counts[leastConnected]) {
            leastConnected = astrologer;
        }
    }

    return leastConnected;
};

module.exports = { registerUser, connectUser };
