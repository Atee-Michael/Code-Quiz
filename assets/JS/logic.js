// Get the start button and add a click event listener
const startButton = document.getElementById("start");
startButton.addEventListener("click", startQuiz);

// Set the initial time and the interval ID
let time = 60;
let timer;

// Set the initial question index and the score
let currentQuestion = 0;
let score = 0;

// Get the elements for the questions and the feedback
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const feedback = document.getElementById("feedback");

// Function to start the quiz
function startQuiz() {
    // Hide the start screen and show the questions
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
  
    // Set the timer and update the time on the screen
    timer = setInterval(updateTime, 1000);
    updateTime();
  
    // Show the first question
    showQuestion();
  }


// Function to update the time
function updateTime() {
    // Decrease the time by 1 and update the time on the screen
    time--;
    document.getElementById("time").textContent = time;
  
    // If the time runs out, end the quiz
    if (time === 0) {
      endQuiz();
    }
  }
  
  // Function to show a question
  function showQuestion() {
    // Get a random question from the questions array
    const question = questions[currentQuestion];
  
    // Set the question title and choices
    questionTitle.textContent = question.question;
    choices.innerHTML = "";
    question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("answer");
      if (answer.correct) {
        button.dataset.correct = true;
      }
      button.addEventListener("click", selectAnswer);
      choices.appendChild(button);
    });
  }
  
  // Function to select an answer
  function selectAnswer(event) {
    // Disable all the answer buttons to prevent multiple selections
    const answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach(button => {
      button.disabled = true;
    });
  
    // Check if the answer is correct and update the feedback and score
    const selectedButton = event.target;
    if (selectedButton.dataset.correct) {
      feedback.textContent = "Correct!";
      score++;
    } else {
      feedback.textContent = "Wrong!";
      time -= 10;
    }
  
    // Wait for 1 second and move on to the next question or end the quiz
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length && time > 0) {
        showQuestion();
      } else {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timer);
  
    // Hide the questions and show the end screen
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
  
    // Set the final score
    document.getElementById("final-score").textContent = score;
  }
  


