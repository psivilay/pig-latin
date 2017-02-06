//business logic back end



//user logic front end

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#word").val();


    $("#result").text(userInput).show();
    //$("#result").show();
  });
});
