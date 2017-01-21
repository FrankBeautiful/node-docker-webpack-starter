var express = require('express');
var path = require('path');

var port = 3000;
var app = express();

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Running on port:'+port);
    }
});