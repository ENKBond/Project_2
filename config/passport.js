const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
    {
        usernameField: "username"
    },
    function(username, password, done) {
        db.User.findOne({
            where: {
                username: username
            }
        }).then(function(dbUser) {
            if(!dbUser) {
                return done(null, false, {
                    message: "User does not exist."
                });
            }
            else if(!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, dbUser);
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;