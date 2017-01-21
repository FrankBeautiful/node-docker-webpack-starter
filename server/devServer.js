import express from 'express';
import webpack from 'webpack';
// import webpackConfig from '../config/webpack.config.dev';
import webpackConfig from '../webpack.config.dev';
import path from 'path';
import fs from 'fs';
import open from 'open';

const port = 3000;
const app = express();

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    watchOptions: { // required for dev hot reloading within a running Docker container
        aggregateTimeout: 300,
        poll: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        if (fs.existsSync('/.dockerenv')) { // file should only exist in docker container
            console.log('Running inside of Docker.  Check \'$ docker-machine ip\' for ip, and docker-compose.yml setup for port info.');
        }
        else {
            open('http://localhost:'+port);
        }
    }
});