FROM node:alpine




COPY package*.json ./
RUN npm install

COPY . . 

EXPOSE 80

CMD ["app.js","package.json"]

