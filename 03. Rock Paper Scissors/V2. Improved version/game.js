let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
let gameResult = document.getElementById('gameResult');
let playerScoreElement = document.getElementById('playerScore');
let computerScoreElement = document.getElementById('computerScore');
let roundNumberElement = document.getElementById('roundNumber');
let computerInputElement = document.getElementById('computerInput');
let playerImage = document.getElementById('playerImage'); // Image for player's choice
let computerImage = document.getElementById('computerImage'); // Image for computer’s choice

// Function to show game section and hide main menu
function startGame() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("gameSection").style.display = "block";
}

// Function to go back to main menu
function goToMenu() {
    document.getElementById("gameSection").style.display = "none";
    document.getElementById("mainMenu").style.display = "flex";
}

// Function to get computer’s random choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum === 1 ? "Rock" : randomNum === 2 ? "Paper" : "Scissors";
}

// Function to set the correct image based on user/computer choice
function setChoiceImage(choice, element) {
    if (choice === "Rock") {
        element.src = "images/rock.png";
    } else if (choice === "Paper") {
        element.src = "images/paper.png";
    } else if (choice === "Scissors") {
        element.src = "images/scissors.png";
    }
}

// Player's choice buttons
function playRock() {
    playGame("Rock");
}

function playPaper() {
    playGame("Paper");
}

function playScissors() {
    playGame("Scissors");
}

// Main game logic
function playGame(playerInput) {
    setChoiceImage(playerInput, playerImage);

    // Reset computer and result sections for a brief moment
    computerInputElement.innerHTML = "Waiting for computer’s choice...";
    computerImage.src = ""; // Clear computer’s image
    gameResult.innerHTML = "Calculating result...";

    // Introduce a delay of 2 seconds before showing the computer’s choice and the result
    setTimeout(() => {
        const computerInput = getComputerChoice();
        setChoiceImage(computerInput, computerImage); // Set computer’s choice image

        computerInputElement.innerHTML = `Computer chose: ${computerInput}`;

        // Determine and display the game result
        let resultMessage = "";
        if (playerInput === computerInput) {
            resultMessage = "It’s a Tie!";
        } else if (
            (playerInput === "Rock" && computerInput === "Scissors") ||
            (playerInput === "Paper" && computerInput === "Rock") ||
            (playerInput === "Scissors" && computerInput === "Paper")
        ) {
            resultMessage = "Player Wins!";
            playerScore++;
        } else {
            resultMessage = "Computer Wins!";
            computerScore++;
        }

        gameResult.innerHTML = resultMessage;
        playerScoreElement.innerHTML = playerScore;
        computerScoreElement.innerHTML = computerScore;
        roundNumberElement.innerHTML = ++roundNumber;

        console.log(`Player chose: ${playerInput}`);
        console.log(`Computer chose: ${computerInput}`);
    }, 2000);
}

// Toggle between dark and light mode
function toggleTheme() {
    let bodyElement = document.body;
    let themeButton = document.getElementById('themeToggle');

    if (bodyElement.classList.contains("light-mode")) {
        bodyElement.classList.remove("light-mode");
        bodyElement.classList.add("dark-mode");
        themeButton.innerHTML = "Switch to Light Mode";
    } else {
        bodyElement.classList.remove("dark-mode");
        bodyElement.classList.add("light-mode");
        themeButton.innerHTML = "Switch to Dark Mode";
    }
}

// Reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 1;

    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
    roundNumberElement.innerHTML = roundNumber;
    gameResult.innerHTML = "Make your move!";
    computerInputElement.innerHTML = "Waiting for choice...";
    playerImage.src = "";
    computerImage.src = "";
}
