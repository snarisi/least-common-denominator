var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var server = require('http').Server(app);
var app = express();

var io = require('socket.io')(server);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('./routes'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../browser')));
app.use(express.static(path.join(__dirname, '../node_modules')));

io.on('connection', function (socket) {
    console.log('Socket connected: ', socket);
});

app.use(function (err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send(err.message);
})

app.listen(8080, function () {
    console.log('Server listening on port 8080');
});
