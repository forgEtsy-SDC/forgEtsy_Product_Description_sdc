FROM node:lts-slim

WORKDIR /webapp

COPY package*.json /webapp/

RUN npm install

COPY . /webapp/

EXPOSE 3002

CMD ["npm", "start"]