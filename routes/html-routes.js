const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    //If the user already has an account, send them to the members page
    //using members and signup html as a filler right now
    app.get("/", function(req, res) {
        if(req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(_dirname, "../public/signup.html"));
    });

    app.get("/login", function(req, res) {
        if(req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(_dirname, "../public/login.html"));
    });

    //if a user who is not logged in tries to access, they will be redirected to signup
    app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(_dirname, "../public/members.thml"));
    });
};