// Gathering HTML elements for manipulation
var quizBody = document.getElementById("quizlet");
var quizT = document.getElementById("timez");
var startQuizBut = document.getElementById("startBut");
var introDiv = document.getElementById("intro");


var timeLeft = 76;
var timerInterval;


function startQuiz(){


    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
          clearInterval(timerInterval);
                  }
      }, 1000);

}


// This button starts the quiz!
startQuizBut.addEventListener("click",startQuiz);
