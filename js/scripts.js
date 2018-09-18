$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#voting-age').show();
  } else if (age === 18) {
    alert("If you havent voted please follow the information on how to register.");
    $('#voting-age').show();
    $('#register').show();
  } else {
    $('#under-18').show();
  }
});
