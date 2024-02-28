FROM node:18

WORKDIR /home/node/

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]