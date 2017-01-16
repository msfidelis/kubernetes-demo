FROM node:latest

COPY app /usr/src/app
RUN npm install nodemon -g

WORKDIR /usr/src/app
COPY app/package.json /usr/src/app/package.json
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
