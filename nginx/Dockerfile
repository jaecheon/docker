FROM nginx:latest

RUN mkdir -p /usr/share/nginx_server/app

WORKDIR /usr/share/nginx_server/app

COPY . .

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 4040