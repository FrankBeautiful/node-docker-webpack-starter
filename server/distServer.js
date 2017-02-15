/* This file uses es5 syntax since 'babel-node not meant for production use' */

var express = require('express');
var path = require('path');
var compression = require('compression');

var port = 3000;
var app = express();

// import express from 'express';
// import path from 'path';
// import compression from 'compression';

// const port = 3000;
// const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('App running on port: http://localhost:'+port);
    }
});
