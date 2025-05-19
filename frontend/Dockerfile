FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY frontend/src/ .
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]