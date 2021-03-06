# node-docker-webpack-starter
Boilerplate for a node application using webpack and optional docker setup.

Development environment will hot-reload whether within Docker container (using '$ docker-compose up'), or without using docker container (using '$ npm start').

## Getting Started:
#### Prerequisites:
[Node](https://nodejs.org/en/) ^6.5.0 and NPM ^3.10.3
*(should work with earlier versions, just haven't checked)*

[Docker](https://www.docker.com/products/docker#/mac) ^1.12.5
*(optional)*

**Create new project from the starter template and install dependencies.**
This creates a new copy of this directory removing .git and node_modules, etc.
```$xslt
$ npm run createproj /PATH/TO/LOCATION/my-project-name
$ cd /PATH/TO/LOCATION/my-project-name
$ npm install
```

**Run outside of docker container** (normal node project development mode.)
```$xslt
$ npm start
```
*&nbsp;&nbsp;&nbsp;&nbsp;\* 'npm install' must be run before docker command*

*&nbsp;&nbsp;&nbsp;&nbsp;\* To load in browser, find the IP address of your running Docker instance ($ docker-machine ip default)*

**Run in Docker container** (optional development mode)
```$xslt
$ docker-compose up
```

**Generate production build to /dist folder and launch index.html in Express**
```$xslt
$ npm run build
```