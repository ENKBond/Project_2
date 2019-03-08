$(document).ready(function () {

  $('.parallax').parallax();

  $('.modal').modal();

  $('select').formSelect();

<<<<<<< HEAD
=======
  var userData = {
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
    ]
  };

 

  
>>>>>>> 54ec9c413e1a6be28719edf44d872eb2c274bdf0

  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      var isValid = true;

<<<<<<< HEAD
      $(".chosen-select").each(function() {
=======
      $(".choices").each(function() {
>>>>>>> 54ec9c413e1a6be28719edf44d872eb2c274bdf0

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
<<<<<<< HEAD
      var newAnimal = {
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
        ]
       
      }; 
      
      console.log(newAnimal);
      // AJAX post the data to the friends API.
      $.post("/api/Animals", newAnimal, function(data) {
=======

      // AJAX post the data to the friends API.
      $.post("/api/Animals", userData, function(data) {
>>>>>>> 54ec9c413e1a6be28719edf44d872eb2c274bdf0

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
<<<<<<< HEAD
        $("#modal1").modal("toggle");
=======
        $("#results-modal").modal("toggle");
>>>>>>> 54ec9c413e1a6be28719edf44d872eb2c274bdf0

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

  

  
  

<<<<<<< HEAD
});   
=======
});
>>>>>>> 54ec9c413e1a6be28719edf44d872eb2c274bdf0
