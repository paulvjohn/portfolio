FROM vendini/ubuntu-14-04

MAINTAINER Marc Urbaitel <marc@urbaitel.com>

# Install Redis
RUN apt-get -y -qq install python redis-server

# install our dependencies and nodejs
RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list
RUN apt-get update
RUN apt-get -y install python-software-properties git build-essential
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get -y install nodejs

# Application code directory
RUN mkdir -p /opt/app
WORKDIR /opt/app



RUN npm build

CMD ["npm", "start"]
