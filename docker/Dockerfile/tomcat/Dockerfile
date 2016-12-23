FROM tomcat:8-jre8

#apps
COPY ./apps/app-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/app.war
COPY ./apps/jenkins.war /usr/local/tomcat/webapps/jenkins.war

#COPY ./apps/api-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/api.war

#config
COPY ./tomcat-users.xml /usr/local/tomcat/conf/tomcat-users.xml
COPY ./server.xml /usr/local/tomcat/conf/server.xml

EXPOSE 8080

CMD ["catalina.sh", "run"]
