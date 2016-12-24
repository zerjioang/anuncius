#!/bin/bash

#go to api

cd api
#mvn clean
#mvn install

#mv ./api/target/*.war ./docker/Dockerfile/apps/

#go back
cd ..

#go to app
cd app

mvn clean
mvn install

#go back
cd ..

#move file
mv ./app/target/*.war ./docker/Dockerfile/tomcat/apps/

#run docker
cd docker
docker-compose up --build
