#!/bin/bash

#request ssl cert update
/opt/letsencrypt/certbot-auto renew

#update ssl cert
sudo cat live/anunci.us/cert.pem > /home/ec2-user/anuncius/docker/Dockerfile/nginx/ssl/cert.pem
sudo cat live/anunci.us/chain.pem > /home/ec2-user/anuncius/docker/Dockerfile/nginx/ssl/chain.pem
sudo cat live/anunci.us/fullchain.pem > /home/ec2-user/anuncius/docker/Dockerfile/nginx/ssl/fullchain.pem
sudo cat live/anunci.us/privkey.pem > /home/ec2-user/anuncius/docker/Dockerfile/nginx/ssl/privkey.pem

#update
sudo git pull

#go to api

cd api
# /opt/apache-maven-3.3.9/bin/mvn clean
# /opt/apache-maven-3.3.9/bin/mvn install

#mv ./api/target/*.war ./docker/Dockerfile/apps/

#go back
cd ..

#go to app
cd app

/opt/apache-maven-3.3.9/bin/mvn clean
/opt/apache-maven-3.3.9/bin/mvn install

#go back
cd ..

#move file
mv ./app/target/*.war ./docker/Dockerfile/tomcat/apps/

#run docker
cd docker
docker-compose up --build
