FROM nginx:latest

WORKDIR /usr/share/nginx/html

#VOLUMNE ./nginx/html .

COPY ./nginx/html .

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 4040