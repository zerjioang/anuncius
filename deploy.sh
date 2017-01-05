#!/bin/bash

#update
sudo git pull

#go to app
cd app

/home/ec2-user/anuncius/tools/apache-maven-3.3.9/bin/mvn clean
/home/ec2-user/anuncius/tools/apache-maven-3.3.9/bin/mvn install

#go back
cd ..

#move file
mv ./app/target/*.war ./docker/Dockerfile/tomcat/apps/

#run docker
cd docker

docker-compose build web
docker-compose up
