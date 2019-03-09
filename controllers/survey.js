var Animal = require("../models/host.js");
var Animals = require("animal.js")
 

//ROUTING
module.exports = function(app){

    app.get("/api/Animal", function(req, res) {
        res.json(Animal);
      });
    

    app.post("/api/Animals", function(req, res) {
        // Note the code here. Our "server" will respond to a user"s survey result
        db.Animal.create({
            name: req.body.name,
            score: req.body.score,
          })
            .then(function(dbNewAnimal) {
              res.json(dbNewAnimal);
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
    const totalDifference;
    
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
        bestMatch.name = currentUser.name;
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
