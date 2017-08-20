// This script file is referenced in TrivaGame/index.html

$(document).ready(function() {

// VARIABLES
    //variables for the HTML elements
    // var quizContainer = $("#quizQuestion").getElementById("quizQuestion");
    // var resultsContainer = $("#result").getElementById("")
    // var submitButton = $("#submitBtn")

    const questions = [
        {question: "What is an average watermelon's weight in water content?",
         answers: {
             a: "30%",
             b: "50%",
             c: "70%",
             d: "90%"
            },
        correctAnswer: "d"
        },
        {question: "How fast does a human sneeze travel?",
         answers: {
             a: "30 mph",
             b: "90 mph",
             c: "100 mph",
             d: "120 mph"
            },
        correctAnswer: "c"
        }
    ];

console.log("print this");
console.log(JSON.stringify(questions));
//FUNCTIONS

    // Function to create the quiz questions
    function createQuiz() {
        var
    }


    // Function to show the answers
    function showAnswer() {

    }


    // Function to show the results
    function showResults() {

    }

    // Function to start the timer
    function timerCall() {

    }

// MAIN SECTION OF CODE
    createQuiz();

    // When the answer is submitted, show the answer and whether the user got it right
    $("#submitBtn").on("click", showAnswer);

    // At the end of the quiz, we want to show the results
})
