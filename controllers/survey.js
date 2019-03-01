const Users = (../models/host.js)
 

//ROUTING

app.post("/api/Users", function(req, res) {
    // Note the code here. Our "server" will respond to a user"s survey result
   

    // We will use this object to hold the "best match". We will constantly update it as we
    // loop through all of the options
    var bestMatch = {
      user_name: "",
      photo: "",
      userDifference: Infinity
    };



//taking the results of the surveys.
const userData = req.body;
const quizScores = quizScores.quiz_scores;

// calculate function that will find the difference in our survey answers
const difference;

//looping through the possibilities of animals to chat with. 
for(let i = 0; i < Users.length; i++){
    const currentUser = Users[i];
    totalDifference= 0;
    console.log(Users.user_name);

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
    bestMatch.name = currentUser.user_name;
    bestMatch.photo = currentUser.quizScores;
    bestMatch.userDifference = totalDifference;
  }
}
// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
    // the database will always return that the user is the user's best friend).
    Users.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

