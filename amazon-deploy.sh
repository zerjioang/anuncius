#!/bin/bash

#restart local nginx
sudo service nginx restart

#request ssl cert update
/opt/letsencrypt/certbot-auto renew

#stop local nginx after request done
sudo service nginx stop

#update ssl cert
sudo chown $USER -R /etc/letsencrypt/live/
cp /etc/letsencrypt/live/anunci.us/* /home/ec2-user/anuncius/docker/Dockerfile/nginx/ssl/

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
