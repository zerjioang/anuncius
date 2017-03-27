<p align='center'>
<img src='https://cloud.githubusercontent.com/assets/6706342/21369942/b0b665b6-c709-11e6-8379.png'/>
</p>
Social & Collaborative Donationware Shop

## Requirements

 * git
 * docker
 * docker-compose

## Install

```
reset; docker-compose down; docker-compose up --build
```

### Microservices (development)

* Mongo DB node
* Tomcat node
* Jenkins node
* Redis node

### Microservices (production example)
* 1x NGINX load balancer
* 1x Mongo DB node
* 2x Tomcat node
* 2x Redis node

## Configuration

Current configuration may vary depending on your system configuration.

#### Tomcat management

```
http://172.18.0.5:8010/ and login with admin:admin
```

#### Jenkins management

```
http://172.18.0.5:8080/
```
```
master pass: 77f5be825ad74b62a6947890793455a3

username: admin

password: aZhXM5C2ff42zZ8kZfg67ZjF

full name: Administrator
```
