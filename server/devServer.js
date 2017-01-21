var express = require('express');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var port = 3000;
var app = express();

var webpackConfig = {
    entry: [
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './src/index'
    ],
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

var compiler = webpack(webpackConfig);

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
            var open = require('open');
            open('http://localhost:'+port);
        }
    }
});
