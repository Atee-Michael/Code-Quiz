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

  // Decrease the time by 1 and update the time on the screen


  // If the time runs out, end the quiz


// Function to show a question

  // Get a random question from the questions array
  

  // Set the question title and choices

// Function to select an answer

  // Disable all the answer buttons to prevent multiple selections


  // Check if the answer is correct and update the feedback and score
 

  // Wait for 1 second and move on to the next question or end the quiz


// Function to end the quiz

  // Stop the timer
 

  // Hide the questions and show the end screen
  

  // Set the final score
  

// Get the submit button and add a click event listener


// Function to save the score

  // Get the initials and the high scores from localStorage
  

  // Add the new score to the high scores array and sort it in descending order
 


