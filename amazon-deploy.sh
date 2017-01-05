#!/bin/bash

#update
sudo git pull

#go to api

cd api
#/opt/apache-maven-3.3.9/bin/mvn clean
#/opt/apache-maven-3.3.9/bin/mvn install

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

docker-compose build web
docker-compose up
