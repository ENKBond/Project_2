const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});
 

//routes to be added here

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT" + PORT);
    });
});