# stage 1
FROM node:16 as node

# Create app directory
WORKDIR /usr/src/app

# Bundle app source (make sure you have package.json copied)
COPY . .

# install dependencies, @angular cli will be installed here as well
RUN yarn install

# build your project into dist folder
RUN npm run build

# stage 2
FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=node /usr/src/app/dist/ .

