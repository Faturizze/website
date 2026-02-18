FROM node:20

WORKDIR /app

COPY package*.json .

RUN pnpm install

COPY . . 

RUN pnpm build

EXPOSE 3000

CMD ["npm", "run", "start"]
