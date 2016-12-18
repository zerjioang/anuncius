

FROM tomcat:8-jre8

COPY ./target/smouq.war /usr/local/tomcat/webapps/
# COPY ../volumes/tomcat/conf/tomca-users.xml /usr/local/tomcat/conf/

EXPOSE 9010

CMD ["catalina.sh", "run"]
