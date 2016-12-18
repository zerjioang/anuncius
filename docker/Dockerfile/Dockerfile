

FROM tomcat:8-jre8

COPY ./apps/app-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/app.war
COPY ./tomcat-users.xml /usr/local/tomcat/conf/tomcat-users.xml
COPY ./server.xml /usr/local/tomcat/conf/server.xml

EXPOSE 80

CMD ["catalina.sh", "run"]
