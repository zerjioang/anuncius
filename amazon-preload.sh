#!/bin/bash
echo "Installing needed dependencies..."
echo "Installing MAVEN..."
sudo wget http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O /etc/yum.repos.d/epel-apache-maven.repo
sudo sed -i s/\$releasever/6/g /etc/yum.repos.d/epel-apache-maven.repo
sudo yum install -y apache-maven
mvn --version
echo "Removing Java 1.7"
sudo yum remove java-1.7.0-openjdk
echo "Installing Java 1.8"
sudo yum install java-1.8.0-openjdk-devel
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
