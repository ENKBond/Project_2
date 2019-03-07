// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================
// // var user = require("../models/user.js");

// // const router = express.Router();

// // const db = 


// // Routes
// // =============================================================
// module.exports = function (app) {

// //get home page
//     app.get("/", function (req, res) {
//         res.sendFile(path.join(__dirname, 'homepage'));
//     });

//  //get sign up page
//  app.get("/signUp", function(req,res){
//      res.sendFile(path.join(__dirname,"signUp"));
//  }).then()   

// //get survey page page
//     app.get("/User/survey:", function (req, res) {
//         res.sendFile(path.join(__dirname, "surveypage"));

//     });

//  // Get Chat Users.
//     app.get("/User", function (req, res) {
//         // send us to the next get function instead.
//         res.sendFile(path.join(__dirname, ""));
//     });

// // Get chat page
// app.get('/chat', function (req, res) {
//     res.sendFile(path.join(__dirname, '../app/data/public/chat.html'));
// });


// // posting our new users into our db/ taking us to the signup page 
//     app.post("/User/newuser", function (req, res) {
//         db.User.create({
//             user_name: req.body.user_name,
//             password: req.body.password,
//             quiz_score: req.body.score
//         }).then(function (dbUser) {
//             console.log(dbUser);
//             res.redirect("/");
//         });
//     });

//     //put route that allows us to update our User's . 
//     // router.put("/api/User", function (req, res) {

//     // });
// };

