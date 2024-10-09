# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the source code.
COPY ./src ./src

# Command to run the application.
CMD ["node", "src/api.js"]
