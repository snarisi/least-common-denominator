app.factory('Socket', function () {
    var socket = io(window.location.href);

    socket.on('connect', function () {
        console.log('I am connected');
    });

    socket.on('hello', function (message) {
        console.log(message);
    });

    socket.on('groups', function (groups) {
        console.log(groups);
    })

    return socket;
});
