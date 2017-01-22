# node-docker-webpack-starter
Boilerplate for a node application using webpack and optional docker setup.
Development environment will hot-reload within Docker container (or seperate if just running 'npm start' locally).

## Getting Started:
#### Prerequisites:
[Node](https://nodejs.org/en/) ^6.5.0 and NPM ^3.10.3
*(should work with earlier versions, just haven't checked)*

[Docker](https://www.docker.com/products/docker#/mac) ^1.12.5
*(optional)*

**Create new project from the starter template, install dependencies, and run.** *(creates copy without .git, node_modules, etc.)*
```$xslt
$ npm run create /PATH/TO/LOCATION/my-project-name
$ cd /PATH/TO/LOCATION/my-project-name
$ npm install
$ npm start
```

**Run in Docker container** (development mode)
```$xslt
$ docker-compose up
```

**Generate production build to /dist folder and launch index.html in Express**

