#!/bin/bash

#stop docker nginx and avoid port 80 conflicts
cd docker
docker-compose stop nginx
cd ..

#restart local nginx
sudo service nginx restart

#request ssl cert update
./tools/letsencrypt/certbot-auto renew --debug

#stop local nginx after request done
sudo service nginx stop

#start docker nginx again
cd docker
docker-compose start nginx
cd ..

#update ssl cert
sudo chown $USER -R /etc/letsencrypt/live/
cp /etc/letsencrypt/live/anunci.us/* /home/ec2-user/anuncius/docker/volumes/nginx/config/ssl/

echo "Finished"
