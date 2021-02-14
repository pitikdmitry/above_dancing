FROM nginx:alpine

RUN mkdir /app
WORKDIR /app

COPY . /app

COPY nginx.conf /etc/nginx/nginx.conf
COPY acme.conf /etc/nginx/acme.conf

#   need to run only on virtual machine, where sertificates exists
COPY /etc/letsencrypt/live/abovedancing.ru/fullchain.pem /etc/letsencrypt/live/abovedancing.ru/fullchain.pem
COPY /etc/letsencrypt/live/abovedancing.ru/privkey.pem /etc/letsencrypt/live/abovedancing.ru/privkey.pem
COPY /etc/letsencrypt/live/abovedancing.ru/fullchain.pem /etc/letsencrypt/live/abovedancing.ru/chain.pem

ENTRYPOINT ["nginx", "-g", "daemon off;"]

#   start locally
#   docker build -t nginx-docker .
#   docker run -d -p 80:80 nginx-docker

#   build image and push to registry
#   docker build -t nginx-docker . && docker tag nginx-docker pitikdmitry/nginx-docker && docker push pitikdmitry/nginx-docker

#   start container on virtual machine
#   ssh ...
#   docker rm -vf $(docker ps -aq) && docker pull pitikdmitry/nginx-docker && docker run -d -p 80:80 pitikdmitry/nginx-docker
