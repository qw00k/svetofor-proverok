FROM node:20-alpine AS bot-deps
WORKDIR /app/bot
COPY bot/package*.json ./
RUN npm install --omit=dev

FROM node:20-alpine
WORKDIR /app

RUN npm install -g serve

COPY --from=bot-deps /app/bot/node_modules ./bot/node_modules
COPY bot/bot.js ./bot/
COPY bot/package.json ./bot/
COPY webapp ./webapp

EXPOSE 3000 8080

CMD ["sh", "-c", "serve webapp -l 3000 & node bot/bot.js"]