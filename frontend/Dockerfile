FROM node:23-alpine

ARG VITE_BE_HOST="test"

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

ENV VITE_BE_HOST=${VITE_BE_HOST}

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]