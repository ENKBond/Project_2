$(document).ready(function () {

  var userData = {
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),]
  };
  
  $('.parallax').parallax();

  $('.modal').modal();

  $('select').formSelect();


});   