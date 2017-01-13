# Set nginx base image
FROM nginx:1.11.8-alpine

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

# Copy ssl files
RUN mkdir /ssl \
	&& mkdir /tmp/nginx_cache

#COPY ./ssl/fullchain.pem /ssl/fullchain.pem
#COPY ./ssl/privkey.pem /ssl/privkey.pem
#COPY ./ssl/dhparam.pem /ssl/dhparam.pem
#COPY ./ssl/ssl.conf /ssl/ssl.conf

#export volumes
VOLUME /ssl
VOLUME /usr/share/nginx
VOLUME /tmp/nginx_cache
