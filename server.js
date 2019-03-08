const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session =require("express-session");
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
users = [];
connections = [];


const passport = require("./config/passport");

const PORT = process.env.PORT || 8000;
const db = require("./models");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);





// app.get('/', function(req, res) {
 
//     res.send('Welcome to Passport with Sequelize');
 
// });
 


app.use(express.static("public"));
require("./routes/routes.js")(app);


// // Get chat page
// app.get('/chat', function (req, res) {
//     res.sendFile(__dirname, '../app/data/public/chat.html');
// });

io.sockets.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);


    // Disconnect
    socket.on('disconnect', function (data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames;
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected %s sockets connected', connections.length);
    });

    // Send message
    socket.on('send message', function(data){
        io.sockets.emit('new message', {msg: data, user: socket.username});
    })

    // New User
    socket.on('new user', function(data, callback){
        callback(true);
        socket.username = data;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames(){
        io.sockets.emit('get users', users);
    }
});

//routes to be added here


db.sequelize.sync({force: true}).then(function() {
    server.listen(PORT, function() {
        console.log("App listening on PORT" + PORT);
    });
});