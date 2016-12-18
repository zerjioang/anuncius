#!/bin/bash

cd  ../api
#mvn clean
#mvn install

#mv /home/ec2-user/musutruq/api/target/*.war ../docker/Dockerfile/apps/

cd ../app
mvn clean
mvn install

mv /home/ec2-user/musutruq/app/target/*.war ../docker/Dockerfile/apps/

cd ../docker
docker-compose up --build
