# FROM node:lts as migrations

# COPY migrations ./migrations
# COPY scripts/*.js .
# COPY scripts/package.json .
# COPY scripts/tsconfig.json .

# RUN SUPPRESS_SUPPORT=true npm i --silent \
#     && node run-migration.js \
#     && npm run migrate:latest


FROM node:14-alpine

COPY . .

RUN npm i yarn
RUN yarn

ENTRYPOINT yarn start
# ENTRYPOINT yarn migrate:latest && yarn start