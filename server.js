// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const socketConns = require('./socketConns');
const passport = require("./config/passport");


// Set up express
const PORT = process.env.PORT || 8000;

// Require models
const db = require("./models");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.attach(http);

socketConns(io);

// Set up Express for data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Static directory
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Sync models and start Express
db.sequelize.sync({ force: true }).then(function () {
    http.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    });
});
