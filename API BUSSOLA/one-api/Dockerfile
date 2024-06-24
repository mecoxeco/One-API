FROM node:alpine

LABEL maintainer "William Tenório da Silva <contato@williamtenorio.com.br>"

WORKDIR /DesafioProfissionalV-main/API BUSSOLA/one-api/src/main.ts

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]