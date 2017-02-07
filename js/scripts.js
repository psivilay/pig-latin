//business logic back end

var numbers = ["0","1","2","3","4","5","6","7","8","9"]

var pigLatin = function(userInput) {
  if (userInput / 1 === userInput) {
    return userInput;
  }
};

//user logic front end

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#word").val());

    var result = pigLatin(userInput);

    $("#result").text(result).show();
  });
});
