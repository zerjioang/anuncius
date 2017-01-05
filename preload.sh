#!/bin/bash
echo "Installing needed dependencies..."
echo "Installing MAVEN..."
cd ./tools/
wget http://mirrors.gigenet.com/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
tar -zxvf apache-maven-3.3.9-bin.tar.gz -C ./
echo "Removing Java 1.7"
sudo yum remove java-1.7.0-openjdk
echo "Installing Java 1.8"
sudo yum install java-1.8.0-openjdk-devel
echo "Anuncius installation script on Amazon AMI"
sudo yum update -y
echo "Installing nginx server for ssl auto renew"
sudo yum install nginx
sudo service nginx stop
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
