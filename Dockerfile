# Base image is node, with tag 9.11.2-alpine
FROM node:9.11.2-alpine

# Making folder for app in image
RUN mkdir /srv/app

# Switching to /srv/app as working directory
# This may not be needed
WORKDIR /srv/app

