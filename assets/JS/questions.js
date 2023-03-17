var questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Berlin", "London"],
    correctAnswer: 0
  },
  {
    question: "What is the tallest mammal?",
    answers: ["Elephant", "Giraffe", "Rhinoceros"],
    correctAnswer: 1
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: ["Mercury", "Venus", "Mars"],
    correctAnswer: 0
  }
];

var currentQuestion = 0;
var timeLeft = 30;

function displayQuestion() {
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  var answersHTML = "";
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    answersHTML += "<button onclick='checkAnswer(" + i + ")'>" + questions[currentQuestion].answers[i] + "</button>";
  }
  document.getElementById("answers").innerHTML = answersHTML;
}

function startQuiz() {
  displayQuestion();
  var countdown = setInterval(function() {
    timeLeft--;
    if (timeLeft == 0) {
      clearInterval(countdown);
      timeLeft = 30;
      currentQuestion++;
      if (currentQuestion == questions.length) {
        endQuiz();
      } else {
        displayQuestion();
      }
    }
  }, 1000);
}

function checkAnswer(answerIndex) {
  if (answerIndex == questions[currentQuestion].correctAnswer) {
    alert("Correct!");
  } else {
    alert("Incorrect!");
  }
}

function endQuiz() {
  alert("Quiz complete!");
}