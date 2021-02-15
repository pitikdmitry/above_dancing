FROM nginx:alpine

RUN mkdir /app
WORKDIR /app

COPY . /app

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/acme.conf /etc/nginx/acme.conf

#   need to run only on virtual machine, where sertificates exists
COPY fullchain.pem /etc/letsencrypt/live/abovedancing.ru/fullchain.pem
COPY privkey.pem /etc/letsencrypt/live/abovedancing.ru/privkey.pem
COPY chain.pem /etc/letsencrypt/live/abovedancing.ru/chain.pem

ENTRYPOINT ["nginx", "-g", "daemon off;"]
