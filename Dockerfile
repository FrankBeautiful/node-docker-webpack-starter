FROM node:6.9.2

MAINTAINER Bruce MacFarlane <bruce@bmacfarlane.com>

# creating our own user keeps this from being run as 'root' which is against best practices
RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app

# Create src directory
RUN mkdir -p $HOME/src

# Install src dependencies
COPY package.json $HOME/src/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/src

RUN cd $HOME/src/ && npm cache clean &&  npm install

COPY . $HOME/src

EXPOSE 3000

# the CMD below if overriden by the docker-compose 'command' when in development
CMD [ "node", "server/distServer.js" ]