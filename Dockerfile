# Specify the base image
FROM node:alpine

# Specify working directory
WORKDIR /usr/visits

# COPY package json
COPY ./package.json ./

# install dependencies
RUN npm install

# Copy source files
COPY ./ ./

# Specify Default command
CMD ["npm", "start"]