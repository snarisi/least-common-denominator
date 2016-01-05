var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var server = require('http').createServer();
var app = express();

server.on('request', app);

module.exports = server;
require('./socket.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('./routes'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../browser')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use(function (err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send(err.message);
})

server.listen(8080, function () {
    console.log('Server listening on port 8080');
});
