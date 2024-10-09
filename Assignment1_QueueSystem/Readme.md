# Assignment 1: Queue System

## Overview
This project implements a backend system that manages user requests using a queue structure.

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install`.

## Usage
Run the application using Docker:
```bash
docker build -t queue_system .
docker run -p 3000:3000 queue_system
Objective
Design and implement a backend system that efficiently manages requests from multiple users using a queue structure.

Requirements
User Authentication
Request Queueing
Request Processing
Concurrency Management
Scalability
Robustness
Logging and Monitoring
Tools and Technologies
Programming Language: Node.js
Messaging/Queueing System: RabbitMQ / Redis / Kafka
Database: PostgreSQL / MongoDB
Monitoring Tools: Prometheus, Grafana

Assignment1_QueueSystem/
├── src/                 # Contains source code files
├── tests/               # Contains test files
├── Dockerfile           # Docker configuration
├── README.md            # Documentation
├── diagrams/            # Contains system architecture and flow diagrams
└── results/             # Contains test results

Endpoints:
1. User Authentication Endpoints
POST /login

Description: Authenticates a user and returns a JWT token.
Request Body:
json
Copy code
{
  "username": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "token": "jwt_token"
}
POST /register

Description: Registers a new user and returns a JWT token.
Request Body:
json
Copy code
{
  "username": "string",
  "password": "string"
}
Response:
json
Copy code
{
  "token": "jwt_token"
}
2. Request Queueing Endpoints
POST /enqueue
Description: Enqueues a request for the authenticated user.
Request Body:
json
Copy code
{
  "requestData": "string"
}
Response:
json
Copy code
{
  "message": "Request has been added to the queue."
}
3. Request Processing Endpoint
GET /dequeue
Description: Dequeues and processes the next request for the authenticated user.
Response:
json
Copy code
{
  "message": "Processing request: requestData"
}
4. Logging Endpoint
GET /logs
Description: Retrieves logs for the authenticated user.
Response:
json
Copy code
[
  {
    "timestamp": "ISO_date",
    "message": "Log message"
  }
]
