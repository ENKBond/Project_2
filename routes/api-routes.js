const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
    //if user has valid login credentials, send to members page(or whatever we call it)
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/chat");
    });

    //route for signing up a user
    app.post("/api/signup", function(req, res) {
        console.log(req.body);
        db.User.create({
            username: req.body.username,
            password: req.body.password
        }).then(function() {
            res.redirect(200, "../survey.html");
            // res.redirect("./survey.html");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });

    });

    //route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    //route for getting data about user to be used client side
    app.get("/api/user-data", function(req, res) {
        if(!req.user) {
            res.json({});
        }
        else {
            res.json({
                username: req.user.username,
                id: req.user.id,
                //quiz_score
            });
        }
    });
};