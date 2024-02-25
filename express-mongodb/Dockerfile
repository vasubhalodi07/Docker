FROM node:latest

# Set the working directory in the container
WORKDIR /home/node/

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Define the command to run the app
CMD [ "node", "index.js" ]
