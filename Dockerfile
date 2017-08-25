FROM node:alpine
EXPOSE 9000
WORKDIR /usr/app

# COPY package.json .
# RUN npm install

COPY ./node_modules/. /usr/app/node_modules/

# Bundle app source
COPY . /usr/app

CMD [ "npm", "start" ]
