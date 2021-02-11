FROM nginx:alpine

RUN mkdir /app
WORKDIR /app

COPY . /app

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

#   docker build -t nginx-docker .
#   docker run -d -p 80:80 -v .:/app nginx-docker
#   docker tag nginx-docker pitikdmitry/nginx-docker
#   docker push pitikdmitry/nginx-docker
#   https://hub.docker.com/u/pitikdmitry