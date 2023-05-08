FROM node:12 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/*
COPY vhost.nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
