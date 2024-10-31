# Use the latest LTS version of Node.js
FROM node:18

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all backend files to the container
COPY . .

# Expose the application port
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]
