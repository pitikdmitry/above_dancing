# above_dancing
landing


useful links:
icons: https://material.io/resources/icons/?icon=emoji_people&style=baseline
google doc about set up for searching system: https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=ru
how create https: https://habr.com/ru/post/318952/#poluchaem-sertifikaty

old scripts
#   start locally
#   docker build -t nginx-docker .
#   docker run -d -p 80:80 nginx-docker

#   build image and push to registry
#   docker build -t nginx-docker . && docker tag nginx-docker pitikdmitry/nginx-docker && docker push pitikdmitry/nginx-docker

#   start container on virtual machine
#   ssh ...
#   docker rm -vf $(docker ps -aq) && docker pull pitikdmitry/nginx-docker && docker run -d -p 80:80 pitikdmitry/nginx-docker

# update certificates
1. uncomment /var/www/html in docker-compose volumes
2. in nginx.conf in listen 80 section remove redirect 301 to 200
3. create new certificates: certbot certonly -d abovedancing.ru
4. certificates will appear /etc/letsencrypt/live/abovedancing.ru_newversion , move them to root folder
