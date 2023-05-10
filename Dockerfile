FROM node:18

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN yarn i

COPY . .

EXPOSE 5173

CMD ["npm","start"]