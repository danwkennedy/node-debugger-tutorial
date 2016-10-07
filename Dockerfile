FROM node:6.7.0

# set environment, can be overridden with build-arg
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV:-production}

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . ./

EXPOSE 8080

CMD ["npm", "start"]
