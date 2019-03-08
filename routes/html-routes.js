const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    //If the user already has an account, send them to the members page
    //using members and signup html as a filler right now
    app.get("/", function(req, res) {
        if(req.user) {
            res.redirect("/public/survey.html");
        }
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // app.get("/login", function(req, res) {
    //     if(req.user) {
    //         res.redirect("/members");
    //     }
    //     res.sendFile(path.join(__dirname, "../public/login.html"));
    // });

    app.get("/survey", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //if a user who is not logged in tries to access, they will be redirected to signup
    // app.get("/members", isAuthenticated, function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/members.html"));
    // });
};

// Socket routing
module.exports = function(socketApp) {
    console.log("HELLO")
    socketApp.get('/', function (req, res) {
        res.sendFile(__dirname, '../public/chat.html');
    });
}