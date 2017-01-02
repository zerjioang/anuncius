# Set nginx base image
FROM nginx

# Copy custom configuration file from the current directory
COPY nginx.conf /etc/nginx/nginx.conf

# Copy ssl files
RUN mkdir /ssl

COPY ./ssl/fullchain.pem /ssl/fullchain.pem
COPY ./ssl/privkey.pem /ssl/privkey.pem
COPY ./ssl/dhparam.pem /ssl/dhparam.pem
COPY ./ssl/ssl.conf /ssl/ssl.conf

#export a volume

VOLUME /usr/share/nginx
