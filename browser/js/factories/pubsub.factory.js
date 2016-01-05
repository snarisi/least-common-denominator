app.factory('PubSub', function (Socket) {
    return {
        listen: function (name, callback) {
            Socket.on(name, callback);
        }
    }
});
