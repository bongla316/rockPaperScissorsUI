document.querySelector("#r").addEventListener("click", playerRock);
document.querySelector("#p").addEventListener("click", playerPaper);
document.querySelector("#s").addEventListener("click", playerScissors);

var computerScore = 0;
var playerScore = 0;
var currentRound = 0;
var RPSButtons = document.getElementById("weapons").innerHTML;
var initialScoreboardState = document.getElementById("scoreBoard").innerHTML;
var initialInstructions = document.getElementById("instructions").innerHTML;


function playerRock() {
    playRound("ROCK");
}

function playerPaper() {
    playRound("PAPER");
}

function playerScissors() {
    playRound("SCISSORS");
}

function computerPlay() {
    var choice = Math.floor(Math.random() * (3)) + 1;

    if (choice == 1) {
        return "ROCK";
    }

    if (choice == 2) {
        return "PAPER";
    }

    if (choice == 3) {
        return "SCISSORS";
    }
}

function playRound(playerSelection) {

    var computerSelection = computerPlay().toUpperCase();

    if (playerSelection == computerSelection) {
        displayResult(playerSelection, computerSelection, 0);
    }

    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {

        displayResult(playerSelection, computerSelection, 1);

    }

    else if ((computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER")) {

        displayResult(playerSelection, computerSelection, 2);

    }
}

function displayResult(playerChoice, computerChoice, winner) {

    currentRound += 1;

    if (winner == 0) {

        var result = "The round was a draw";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(node);
    }

    else if (winner == 1) {
        var result = playerChoice + " beats " + computerChoice + "! Player wins!";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(node);
        playerScore += 1;

        updateScoreboard(computerScore, playerScore);
        winnerCheck(computerScore, playerScore);

    }

    else if (winner == 2) {
        var result = computerChoice + " beats " + playerChoice + "! Computer wins!";
        var node = document.createElement("p");
        var textNode = document.createTextNode(result);
        node.appendChild(textNode);

        document.getElementById("resultDisplay").appendChild(node);
        computerScore += 1;

        updateScoreboard(computerScore, playerScore);
        winnerCheck(computerScore, playerScore);
    }
}

function winnerCheck(cScore, pScore) {
    if (cScore == 5) {
        document.getElementById("instructions").innerHTML = "Computer wins the match!";
        addRestartButton();
    }

    if (pScore == 5) {
        document.getElementById("instructions").innerHTML = "Player wins the match!";
        addRestartButton();
    }

    else {
        return;
    }
}

function updateScoreboard(cScore, pScore) {
    document.getElementById("scorePlayer").innerHTML = pScore;
    document.getElementById("scoreComputer").innerHTML = cScore;
}

function addRestartButton() {

    document.getElementById("weapons").innerHTML = '';
    var node = document.createElement("button");
    var textNode = document.createTextNode("Restart Match");
    node.id = "restartButton";
    node.appendChild(textNode);
    document.getElementById("weapons").appendChild(node);
    document.querySelector("#restartButton").addEventListener("click", reset);
}

function clearDiv(divID) {
    var div = document.getElementById(divID);
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function addRPSButtons() {
    clearDiv("weapons");
    document.getElementById("weapons").innerHTML = RPSButtons;
}

function addNewScoreboard() {
    clearDiv("scoreBoard");
    document.getElementById("scoreBoard").innerHTML = initialScoreboardState;
}

function addInstructions(){
    clearDiv("instructions");
    document.getElementById("instructions").innerHTML = initialInstructions;
}

function reset() {
    clearDiv("resultDisplay");
    addInstructions();
    addRPSButtons();
    addNewScoreboard();
    computerScore = 0;
    playerScore = 0;
    document.querySelector("#r").addEventListener("click", playerRock);
    document.querySelector("#p").addEventListener("click", playerPaper);
    document.querySelector("#s").addEventListener("click", playerScissors);
}