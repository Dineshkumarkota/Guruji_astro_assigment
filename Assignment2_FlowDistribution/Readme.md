Assignment 2: Flow Distribution Algorithm
Overview
Design and implement a flow distribution algorithm in Node.js for connecting users with astrologers.

Requirements
Fair distribution of users to astrologers.
Mechanism to toggle flow for top astrologers.
Handle a daily flow of 2000-3000 users and 500 astrologers efficiently.
Clear documentation of the algorithm and API usage.
Test cases to validate functionality.
Step 1: Organize Your Code
Folder Structure:

plaintext
Copy code
Assignment2_FlowDistribution/
├── src/                 # Contains source code files
├── tests/               # Contains test files
├── Dockerfile           # Docker configuration
├── README.md            # Documentation
├── diagrams/            # Contains system architecture and flow diagrams
└── results/             # Contains test results
Step 2: Write Dockerfile
Create Dockerfile: Create a file named Dockerfile in your assignment directory with the following content:

dockerfile
Copy code
# Use Node.js as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./src ./src

# Expose the application port
EXPOSE 4000

# Start the application
CMD ["node", "src/api.js"]

Endpoints:
1. User Connection Endpoints
POST /connect
Description: Connects a user to an astrologer based on the flow distribution algorithm.
Request Body:
json
Copy code
{
  "userId": "string"
}
Response:
json
Copy code
{
  "message": "Connected to Astrologer X"
}
2. Toggle Flow for Top Astrologers
POST /toggle-flow
Description: Toggles the connection flow for a specified astrologer.
Request Body:
json
Copy code
{
  "astrologerId": "string",
  "status": "boolean"  // true to increase flow, false to decrease
}
Response:
json
Copy code
{
  "message": "Flow status updated for Astrologer X"
}
3. Get Astrologers List
GET /astrologers
Description: Retrieves a list of available astrologers.
Response:
json
Copy code
[
  {
    "id": "string",
    "name": "string",
    "currentFlow": "number"
  }
]
4. API Health Check
GET /health
Description: Checks if the API is up and running.
Response:
json
Copy code
{
  "status": "OK"
}
