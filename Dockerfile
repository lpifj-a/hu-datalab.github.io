FROM node:14.15.4-alpine

WORKDIR /home/node/app
RUN apk update && apk add git && apk add python3 && apk add make && apk add gcc && apk add g++
RUN yarn global add gatsby-cli
EXPOSE 8000