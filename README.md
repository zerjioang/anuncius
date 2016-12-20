<p align='center'>
<img src='https://cloud.githubusercontent.com/assets/6706342/21369942/b0b665b6-c709-11e6-8379-bb563a1d46be.png'></img>
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
* Elasticsearch node
* Tomcat node
* Jenkins node
* Redis node
* Graylog server node


### Microservices (production example)
* 1x NGINX load balancer
* 1x Mongo DB node
* 1x Elasticsearch node
* 2x Tomcat node
* 2x Redis node
* 1x Graylog server node

#### Graylog management

```
http://127.0.0.1:9000 and login with admin:admin
```

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


#### Elastic management

Address is bound to port 9200, but IP might change since its assigned by docker. A example is given:
```
http://172.18.0.4:9200/
```

```
{
  "name" : "Brother Nature",
  "cluster_name" : "graylog",
  "cluster_uuid" : "0IIcdQSST3C-ioQk7bqE_Q",
  "version" : {
    "number" : "2.4.2",
    "build_hash" : "161c65a337d4b422ac0c805f284565cf2014bb84",
    "build_timestamp" : "2016-11-17T11:51:03Z",
    "build_snapshot" : false,
    "lucene_version" : "5.5.2"
  },
  "tagline" : "You Know, for Search"
}
```
