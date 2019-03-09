const db = require("../models");
const passport = require("../config/passport");
var Animals = require("../models/host.js");
 

module.exports = function(app) {
    //if user has valid login credentials, send to members page(or whatever we call it)
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json("/members");
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
    app.get("/api/Animals", function(req, res) {
        res.json(Animals);
      });
    

    app.post("/api/Animals", function(req, res) {
        // Note the code here. Our "server" will respond to a user"s survey result
        console.log(req.body);
        db.NewAnimal.create({
            name: req.body.name,
            score: req.body.score
        }).then(function() {
            res.redirect(200, "../chat.html");
            // res.redirect("./survey.html");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    
        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        var bestMatch = {
          name: "",
          photo: "",
          userDifference: Infinity
        };


    
    
    
    //taking the results of the surveys.
    const userData = req.body;
    const quizScores = quizScores.quiz_scores;
    
    // calculate function that will find the difference in our survey answers
    var totalDifference;
    
    //looping through the possibilities of animals to chat with. 
    for(let i = 0; i < Animals.length; i++){
        const currentUser = Animals[i];
        totalDifference= 0;
        console.log(Animals.name);
    
    //looping through all the user possibilities in the database 
    for(let j = 0; j < currentUser.quiz_scores.length; j++){
        let currentUserScore = currentUser.scores[j];
        let currentUserScore = userScores[j];
       
     // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentUserScores));
    }
    
       // If the sum of differences is less then the differences of the current "best match"
       if (totalDifference <= bestMatch.userDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.Usernname = currentUser.user_name;
        bestMatch.photo = currentUser.quizScores;
        bestMatch.userDifference = totalDifference;
      }
    }
    // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).
        Animals.push(userData);
    
        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);
    });
};