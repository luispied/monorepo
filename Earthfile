VERSION 0.6
FROM node:18-alpine
WORKDIR /monorepo

build:
    COPY . ./
    RUN npm install
    RUN npx lerna run build

test:
    COPY . ./
    RUN npm install
    RUN npx lerna run test