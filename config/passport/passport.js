const bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user) {
    const LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signin', new LocalStrategy(
        {
            username: 'username',
            password: 'password',
            passReqToCallback: true
        },
        function(req, username, password, cb) {

        const isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }

        db.User.findOne({
            where: {
                username: username
            }
         }).then( function(err, user) {
            if(err) {
                return cb(err);
             }
             if(!user) {
                 return cb(null, false, {
                     message: "Username does not exist"
                 });
             }
             if(!isValidPassword(user.password, password)) {
                 return cb(null, false, {
                     message: "Incorrect password"
                 });
             }

             var userInfo = user.get();
             return cb(null, userInfo);

                 });
             }
        ));
    
        
    passport.serializedUser(function(user, cb) {
        cb(null, user.id);
    });

    passport.deserializedUser(function(id, cb) {
        db.Users.findById(id, function(err, user) {
            if(err) {
                return cb(err);
            }
            cb(null, user);
        });
    });

}