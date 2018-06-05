$(document).ready(function(){

$("#formOne").submit(function(event){
  event.preventDefault();

  var userInput = parseInt($("#input-number").val());
  var staticInput = parseInt($("#input-number").val());
  var resultsArray = [];

  for (index = staticInput; userInput > 1; userInput -=1 ) {
      var userResult = userInput - 1;
      resultsArray.push(userResult);
  }
  var sum = 0;
  for (var i = 0; i < resultsArray.length; i++) {
    staticInput *= resultsArray[i];
  }

  $("#result").text(staticInput);
});






































});
