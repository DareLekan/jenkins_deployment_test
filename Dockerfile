
FROM node:16.14-alpine

WORKDIR /sirkay

COPY package.json /sirkay

RUN npm install

COPY . .

RUN npm run build --if-present

EXPOSE 3457

CMD ["npm", "start" ]
