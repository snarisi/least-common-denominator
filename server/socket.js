var server = require('./app.js');
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('Socket connected: ', socket.id);
});

module.exports = io;
