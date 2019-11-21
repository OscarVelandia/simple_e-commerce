FROM node:lts-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 1011
CMD [ "npm", "start" ]
