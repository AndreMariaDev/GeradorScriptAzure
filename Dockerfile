FROM nginx:alpine

COPY ./nginx.config /etc/ngnix/nginx.config
COPY ./index.html /usr/share/nginx/html/

EXPOSE 8080