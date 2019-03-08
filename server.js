const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const socket = require('socket.io');

const passport = require("./config/passport");

const PORT = process.env.PORT || 8000;
const db = require("./models");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
app.use(express.static('public'));


// Express app setup
const socketApp = express();
// Server setup
const server = socketApp.listen(7000, function(){
    console.log("Listening on PORT 7000");
});

// Serve static files from public folder
socketApp.use(express.static('public'));

// Socket setup for backend, invoke function with server parameter
// This allows socket to sit on the server and listen for a browser to connect
const io = socket(server);

// On a connection event, fire callback function. The socket variable is the instance of the socket that is made (each client has their own socket).
io.on('connection', function(socket){
    console.log("Made socket connection: ", socket.id);

    // listen for emit events
    // when chat message is received, take in data
    socket.on('chat', function(data){
        // send message to all sockets (plural)
        io.sockets.emit('chat', data);
    });

    // when a client is typing, take in handle
    socket.on('typing', function(data){
        // broadcast to all other sockets
        socket.broadcast.emit('typing', data);
    });
});


//routes to be added here


db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    });


    // // Socket server
    // socketApp.listen(7800, function () {
    //     console.log('Listening for sockets on *:7800');
    // });
});


