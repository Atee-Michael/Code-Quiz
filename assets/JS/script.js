
/*let questions = [{question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 3},

{question: "", answers:["ex1", "ex2", "ex3", "ex4"], correctAnswer: 2}


]

let currentQuestion = 0;

*/



let quiz = document.getElementById("quiz");
let startButton = document.getElementById("start");
let timerDisplay = document.getElementById("timer");
let questionEl = document.getElementById("questions");
let answersEl = document.getElementById("choices");

//Questions for quiz with answers
let questions = [
  {
    question: "In the JavaScript, which one of the following is not considered as an error?",
    answers: [
      { text: "Missing of semicolons", correct: false },
      { text: "Syntax error", correct: false },
      { text: "Division by zero", correct: true },
      { text: "Missing of Bracket", correct: false }
    ]
  },
  {
    question: "In JavaScript the x===y statement implies that____?",
    answers: [
      { text: "Both are equal in the value and data type", correct: true },
      { text: "Both are not same at all", correct: false },
      { text: "Both are x and y are equal in value only", correct: false },
      { text: "Both x and y are equal in value, type and reference address as well", correct: false }
    ]
  },
  {
    question: "Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      { text: "The local element", correct: true },
      { text: "Global variable", correct: false },
      { text: "The two of the above", correct: false },
      { text: "None", correct: false }
    ]
  },
  {
    question: "Choose the correct snippet from the following to check if the variable “a” is not equal the “NULL”____?",
    answers: [
      { text: "if(a!==null)", correct: true },
      { text: "if (a!)", correct: false },
      { text: "if(a!=null)", correct: false },
      { text: "if(a!null)", correct: false }
    ]
  },
  {
    question: "The “function” and ” var” are known as___",
    answers: [
      { text: "Keywords", correct: false },
      { text: "Data types", correct: false },
      { text: "Prototypes", correct: false },
      { text: "Declaration statements", correct: true }
    ]
  },
  {
    question: "Suppose we have a text “human” that we want to convert into string without using the “new” operator. Which is the correct way from the following to do so____?",
    answers: [
      { text: "String newvariable=”human”", correct: false },
      { text: "String(human)", correct: false },
      { text: "toString()", correct: false },
      { text: "Both human.toString() and String(human)", correct: true }
    ]
  },
  {
    question: "When interpreter encounters an empty statements, what it will do____",
    answers: [
      { text: "Ignores the statements", correct: true },
      { text: "Shows a warning", correct: false },
      { text: "Prompts to complete the statement", correct: false },
      { text: "Throws an error", correct: false }
    ]
  },
  {
    question: " Which one of the following operator is used to check weather a specific property exists or not______",
    answers: [
      { text: "in", correct: true },
      { text: "exist", correct: false },
      { text: "Exists", correct: false },
      { text: "within", correct: false }
    ]
  },
  {
    question: "What if we define a “for” loop and it removes one of the properties that has not yet been enumerated?",
    answers: [
      { text: "The loop will not run at all", correct: false },
      { text: "The removed property will be stored in a cache", correct: false },
      { text: "That property will be enumerated", correct: false },
      { text: "That specific property will not be enumerated", correct: true }
    ]
  },
  {
    question: "Which one of the following is not a keyword_____",
    answers: [
        { text: "with", correct: false },
        { text: "if", correct: false },
        { text: "debugger", correct: false },
        { text: "use strict", correct: true }
    ]
  },
  {
    question: "Which one of the following is not considered as “statement” in the JavaScript?",
    answers: [
      { text: "with", correct: false },
      { text: "if", correct: false },
      { text: "debugger", correct: false },
      { text: "use strict", correct: true }
    ]
  },
  {
    question: " In JavaScript, what is a block of statement?",
    answers: [
      { text: "block that contains a single statement", correct: false },
      { text: "block that combines a number of statements into a single compound statement", correct: true },
      { text: "Conditional block", correct: false },
      { text: "both conditional block and a single statement", correct: false }
    ]
  },
  {
    question: "Which one of the following also known as Conditional Expression____",
    answers: [
      { text: "Switch statement", correct: false },
      { text: "Alternative to if-else", correct: false },
      { text: "If-then-else statement", correct: false },
      { text: "immediate if", correct: true }
    ]
  },
  {
    question: "Which one of the following operator returns false if both values are equal?",
    answers: [
      { text: "==", correct: true },
      { text: "!==", correct: false },
      { text: "!", correct: false },
      { text: "&&", correct: false }
    ]
  },
  {
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      { text: "getElementbyId()", correct: true },
      { text: "getElementsByClassName()", correct: false },
      { text: "Both A and B", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  // You can add more questions here
];


let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;

function startQuiz() {
  start.style.display = "none";
  timer.textContent = timeLeft;
  showQuestion();
  setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}
/*
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  answersEl.innerHTML = "";
  currentQuestion.answers.forEach(answer => {
    let button = document.createElement("button");
    button.textContent = answer.text;
    button.addEventListener("click", selectAnswer);
    answersEl.appendChild(button);
  });
}

function selectAnswer(e) {
  let selectedButton = e.target;
  let correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  } else {
    timeLeft -= 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  quiz.innerHTML = `
    <h2>Your score is ${score}</h2>
    <form>
      <label>
        Enter your initials:
        <input type="text" id="initials" />
      </label>
      <button id="save-score">Save</button>
    </form>
  `;
  let saveScoreButton = document.getElementById("save-score");
  save
