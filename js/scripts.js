//business logic back end

var pigLatin = function(userInput) {
  if (isNaN(userInput) === false) {
    return userInput
  } else if (userInput.includes("i")) {
    return userInput + "ay"
  }
};

//user logic front end

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#word").val();

    var result = pigLatin(userInput);

    $("#result").text(result).show();
  });
});
