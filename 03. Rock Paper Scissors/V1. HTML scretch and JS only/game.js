let gameResult = document.getElementById('gameResult');
var computerInput = Math.floor(Math.random() * 3 + 1);

computerInput = computerInput === 1
    ? "Rock"
    : computerInput === 2
        ? "Paper"
        : "Scissors";
console.log(computerInput); // Logs the computer's choice

var userInput = ""; // Initialize userInput

// Functions to set userInput based on button clicks
function playRock() {
    userInput = "Rock";
    evaluateGame(); // Call the function to evaluate the result
}

function playScissors() {
    userInput = "Scissors";
    evaluateGame();
}

function playPaper() {
    userInput = "Paper";
    evaluateGame();
}

function evaluateGame() {
    console.log("User Input:", userInput); // Logs user's choice

    // Game logic to determine the result
    gameResult = userInput === computerInput
        ? "Tie Game."
        : userInput === "Rock" && computerInput === "Paper"
            ? "Computer Wins."
            : userInput === "Paper" && computerInput === "Scissors"
                ? "Computer Wins."
                : userInput === "Scissors" && computerInput === "Rock"
                    ? "Computer Wins."
                    : "Player Wins.";

    // Display the result
    document.getElementById("gameResult").innerHTML = gameResult;
}
