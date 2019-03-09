module.exports = function (io) {
    // Users and connections
    users = [];
    connections = [];

    // On a connection event, fire callback function. The socket variable is the instance of the socket that is made (each client has their own socket).
    io.on('connection', function (socket) {
        // function to update users array
        function updateUsernames() {
            io.sockets.emit('get users', users);
        };

        // push connection to array
        connections.push(socket);
        // print to console
        console.log("Made socket connection: ", socket.id);

        // on disconnect,
        socket.on('disconnect', function (data) {
            users.splice(users.indexOf(socket.username), 1);
            updateUsernames;
            connections.splice(connections.indexOf(socket), 1);
            console.log("Disonnected socket. Sockets connected: ", connections.length);
        });

        // listen for emit events
        // when chat message is received, take in data
        socket.on('chat', function (data) {
            // send message to all sockets (plural)
            io.sockets.emit('chat', data);
        });

        // Send all messages to the console
        socket.on('chat', function(data){
            console.log('ID: ' + '"' + socket.id + '"' 
            + " | Name: " + '"' + data.username + '"'
            + " | MSG: " + '"' + data.message + '"');
        });

        // when a client is typing, take in username
        socket.on('typing', function (data) {
            // broadcast to all other sockets
            socket.broadcast.emit('typing', data);
        });

        // send new username to users
        socket.on('new user', function (data) {
            socket.username = data;
            users.push(socket.username);
            updateUsernames();
        });

    });
};