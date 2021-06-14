FROM node as react-build

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json .

# run npm install to add depencies
RUN npm install

# copy all files to workdir /app
COPY . .

RUN npm run build


FROM nginx
COPY --from=react-build /app/build  /usr/share/nginx/html

