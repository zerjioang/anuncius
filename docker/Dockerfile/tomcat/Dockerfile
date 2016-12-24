FROM tomcat:8-jre8

#remove tomcat default apps

RUN rm -rf /usr/local/tomcat/webapps/docs \
	&& rm -rf /usr/local/tomcat/webapps/examples \
	&& rm -rf /usr/local/tomcat/webapps/ROOT

#apps

COPY ./apps/app-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/ROOT.war
COPY ./apps/jenkins.war /usr/local/tomcat/webapps/jenkins.war

#COPY ./apps/api-1.0-SNAPSHOT.war /usr/local/tomcat/webapps/api.war

#config

COPY ./tomcat-users.xml /usr/local/tomcat/conf/tomcat-users.xml
COPY ./server.xml /usr/local/tomcat/conf/server.xml

EXPOSE 8080

CMD ["catalina.sh", "run"]
