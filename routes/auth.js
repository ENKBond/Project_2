const authController = require('../controllers/authcontroller.js');

module.exports = function(app) {
    app.get('./signup', authController.signup);

    app.get('./signin', authController.signin);

    
    app.get('./dashboard', isLoggedIn, authController.dashboard);
    
    app.get('/logout', authController.logout);
    
    app.post('./signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }


}