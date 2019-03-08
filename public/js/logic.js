$(document).ready(function () {

  $('.parallax').parallax();

  $('.modal').modal();

  $('select').formSelect();


  // Capture the form inputs
  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
      var isValid = true;

      $(".chosen-select").each(function() {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // Create an object for the user"s data
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

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#modal1").modal("toggle");

      });
    } else {
      alert("Please fill out all fields before submitting!");
    }
  });

  

  
  

});   