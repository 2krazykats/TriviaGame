$(document).ready(function() {

    var numberWrong;
    var countDown = 5;

    //Figure out the total number of questions in the quiz
    var totalQuestions = document.querySelectorAll(".question");
    console.log(totalQuestions.length);

    function getId(id) {
        return $(id).val();
    }

    // Show quiz results
    function showResults() {
        var wrongAnswers = [];

        if ($("#Q1d").prop("checked") !== true) { wrongAnswers.push(1); }
        if ($("#Q2c").prop("checked") !== true) { wrongAnswers.push(2); }
        if ($("#Q3b").prop("checked") !== true) { wrongAnswers.push(3); }
        if ($("#Q4b").prop("checked") !== true) { wrongAnswers.push(4); }
        if ($("#Q5d").prop("checked") !== true) { wrongAnswers.push(5); }

        var numberCorrect = (totalQuestions.length - wrongAnswers.length);

        $("#result").html(`You got ${numberCorrect} total correct answers out of ${totalQuestions.length}`);

    }

    // Show the results and stop the clock when the user hits submit
    $("#submitBtn").on("click", function() {
        showResults();
        clearInterval(intervalVar);
        $("#tryAgainBtn").attr("style", "display:block");
    })

    // Counter for the game; ends the game when time runs out
    function countDownCall() {
        var intervalVar = setInterval(function() {
             $(".countDownDiv").html("<h2>" + countDown + " Seconds</h2>");
             countDown--;

                 if (countDown === 1) {
                     setTimeout(function(){
                         alert("Time's run out!");
                         showResults();
                         clearInterval(intervalVar);
                         $("#tryAgainBtn").attr("style", "display:block");
                     }, 2000);
                 }
        }, 1000);
    }

    countDownCall();
    
    // When the user wants to try the quiz again
    $("#tryAgainBtn").on("click", function() {
            $(".answerInput").button('reset');
            $(".answerInput").find("input:radio").prop("checked",false);
            $("#result").html('');
            $("#tryAgainBtn").attr("style", "display:none");
            countDown = 5;
            countDownCall();
    })

});
