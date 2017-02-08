//business logic back end

var vowels = ["a", "e", "i", "o", "u"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

//var inputArrays = userInput.split("")

var pigLatin = function(userInput) {
  if (isNaN(userInput) === false || userInput.includes("1")) { //checks if it contains numbers
    return userInput;
  } else if (userInput.startsWith("a") || userInput.startsWith("e") || userInput.startsWith("i") || userInput.startsWith("o") || userInput.startsWith("u")) {
    return userInput + "ay";
  } else if (userInput != userInput.startsWith("a") && userInput != userInput.startsWith("e") && userInput != userInput.startsWith("i") && userInput != userInput.startsWith("o") && userInput != userInput.startsWith("u")) {
      var inputArray = userInput.split("")
      for (var index = 0; index <= inputArray.length; index += 1) {
        for (var index1 = 0; index1 <= vowels.length; index1 +=1) {
          if (inputArray[index] === vowels[index1]) {
            //alert(inputArray.indexOf(vowels[index1]))
            var vowelLocation = inputArray.indexOf(vowels[index1])
            var newEnding = userInput.slice(0 ,vowelLocation) + "ay"
            return userInput.replace(userInput.slice(0, vowelLocation), "") + newEnding
          } else {

          }
        //inputArray.indexOf(vowels[index]))

        //alert(userInput.indexOf(vowels[index]))
        };
      };

    //var vowelLocation = findVowel(userInput)

    //return userInput.slice()
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
