$(document).ready(function() {
  var height = parseInt(prompt("How tall are you? (inches)"));

  if (height > 60) {
    $('#above60-valid').show();
  } else if (height === 60) {
    alert("Congrats, you can ride all the rides!");
    $('#above60').show();
  } else if (height === 59) {
    alert("How's the weather down there? Try these kiddie rides");
    $('#below60-valid').show();
  } else {
    $('#below60').show();
  }
});
