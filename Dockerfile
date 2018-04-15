FROM node:slim

ENV NPM_CONFIG_LOGLEVEL=warn

WORKDIR /usr/src/app

COPY build ./build
COPY server.js .
COPY package.json .

RUN npm install --production

CMD node server
