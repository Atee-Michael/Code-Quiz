// Get the highscores list and the clear button
const highscoresList = document.getElementById("highscores");
const clearButton = document.getElementById("clear");

// Retrieve the scores from local storage and sort them in descending order
const scores = JSON.parse(localStorage.getItem("scores")) || [];
scores.sort((a, b) => b.score - a.score);

// Add each score to the highscores list
scores.forEach((score, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
  highscoresList.appendChild(listItem);
});

// Add a click event listener to the clear button to clear the scores from local storage and reload the page
clearButton.addEventListener("click", () => {
  localStorage.removeItem("scores");
  location.reload();
});


