#!/bin/bash
echo "Musutruq installation script on Amazon AMI"
sudo yum update -y
echo "Installing Docker..."
sudo yum install -y docker
sudo service docker start
echo "Adding Amazon user to docker group"
sudo usermod -a -G docker ec2-user
echo "Installing docker-compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/1.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
exit
