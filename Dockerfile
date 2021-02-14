FROM nginx:alpine

RUN mkdir /app
WORKDIR /app

COPY . /app

COPY nginx.conf /etc/nginx/nginx.conf
COPY acme.conf /etc/nginx/acme.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

#   start locally
#   docker build -t nginx-docker .
#   docker run -d -p 80:80 nginx-docker

#   build image and push to registry
#   docker build -t nginx-docker . && docker tag nginx-docker pitikdmitry/nginx-docker && docker push pitikdmitry/nginx-docker

#   start container on virtual machine
#   ssh ...
#   docker rm -vf $(docker ps -aq) && docker pull pitikdmitry/nginx-docker && docker run -d -p 80:80 pitikdmitry/nginx-docker

