#!/bin/bash

#stop docker nginx and avoid port 80 conflicts
cd docker
docker-compose stop balancer
cd ..

#restart local nginx
sudo service nginx restart

#request ssl cert update
./tools/letsencrypt/certbot-auto renew

#stop local nginx after request done
sudo service nginx stop

#start docker nginx again
cd docker
docker-compose start balancer
cd ..

#update ssl cert
sudo chown $USER -R /etc/letsencrypt/live/
cp /etc/letsencrypt/live/anunci.us/* /home/ec2-user/anuncius/docker/Dockerfile/nginx/ssl/

echo "Finished"
