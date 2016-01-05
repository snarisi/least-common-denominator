app.factory('Socket', function () {
    var socket = io(window.location.href);

    socket.on('connect', function () {
        console.log('I am connected');
    });

    socket.on('hello', function (message) {
        console.log(message);
    });

    return socket;
});
