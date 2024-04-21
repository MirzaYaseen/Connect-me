# Use official Node.js image as the base image
FROM node:alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use nginx as the production server
FROM nginx:alpine

# Copy the build files from the previous stage to nginx's default public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
