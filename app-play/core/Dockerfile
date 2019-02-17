FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

CMD chown -R node:node /usr/local/lib/node_modules

RUN npm install

RUN npm install -g pm2

COPY --chown=node:node . .

EXPOSE 6666:6666
