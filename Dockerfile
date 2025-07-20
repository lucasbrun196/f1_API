#STAGE1

FROM node:23-alpine AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY tsconfig.json ./

RUN npm install

COPY src ./src

RUN npm run build


# STAGE2

FROM node:23-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package.json ./
 
COPY --from=build /usr/src/app/package-lock.json ./

RUN npm install --only=production

RUN npm cache clean --force

COPY --from=build /usr/src/app/dist ./dist

CMD ["node", "dist/server.js"]