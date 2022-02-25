# Dockerfile for angular project
ARG nodeVersion

FROM node:$nodeVersion

WORKDIR /angular
COPY $PWD /angular

ENV PATH /angular/node_modules/.bin:$PATH

RUN npm install
RUN npm install -g @angular/cli 

CMD ng serve --host 0.0.0.0
