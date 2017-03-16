FROM node:7-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["npm", "test"]
