# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Define build arguments
ARG PORT
ARG MONGODB_URI
ARG CLERK_PUBLISHABLE_KEY
ARG CLERK_SECRET_KEY

# Set environment variables using the build args
ENV PORT=${PORT}
ENV MONGODB_URI=${MONGODB_URI}
ENV CLERK_PUBLISHABLE_KEY=${CLERK_PUBLISHABLE_KEY}
ENV CLERK_SECRET_KEY=${CLERK_SECRET_KEY}

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install TypeScript globally and build the TypeScript code
RUN npm install -g typescript
RUN tsc

# Specify the command to run the app
CMD ["node", "dist/index.js"]

# Expose the port the app runs on
EXPOSE ${PORT}
