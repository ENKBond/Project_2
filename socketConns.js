module.exports = function (io) {
    // On a connection event, fire callback function. The socket variable is the instance of the socket that is made (each client has their own socket).
    io.on('connection', function (socket) {
        console.log("Made socket connection: ", socket.id);

        // listen for emit events
        // when chat message is received, take in data
        socket.on('chat', function (data) {
            // send message to all sockets (plural)
            io.sockets.emit('chat', data);
        });

        // when a client is typing, take in handle
        socket.on('typing', function (data) {
            // broadcast to all other sockets
            socket.broadcast.emit('typing', data);
        });
    });
};