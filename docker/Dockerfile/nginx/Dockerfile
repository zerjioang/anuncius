# Set nginx base image
FROM nginx:1.11.8-alpine

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

# create folders for volumes
RUN mkdir /config \
	&& mkdir /tmp/nginx_cache \
	&& mkdir /nginx_logs

#export volumes
VOLUME /config
VOLUME /usr/share/nginx
VOLUME /tmp/nginx_cache
VOLUME /nginx_logs
