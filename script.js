document.querySelector("#r").addEventListener("click", playerRock);
document.querySelector("#p").addEventListener("click", playerPaper);
document.querySelector("#s").addEventListener("click", playerScissors);

var computerScore = 0;
var playerScore = 0;
var currentRound = 0;
var RPSButtons = document.getElementById("weapons").innerHTML;
var initialScoreboardState = document.getElementById("scoreBoard").innerHTML;
var initialInstructions = document.getElementById("instructions").innerHTML;
var resetPage = document.getElementById("wrapper").innerHTML;

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

        var imgNodeP = document.createElement("img");
        imgNodeP.setAttribute("src", getImgSourceP(playerChoice));
        var nodetr = document.createElement("tr");
        var nodePlayertd = document.createElement("td");
        nodePlayertd.appendChild(imgNodeP);
        nodetr.appendChild(nodePlayertd);
        document.getElementById("tableContent").appendChild(nodetr);
        
        var imgNodeR = document.createElement("img");
        imgNodeR.setAttribute("src", "images/neutral.png");
        var nodetd = document.createElement("td");
        nodetd.appendChild(imgNodeR);
        nodetr.appendChild(nodetd);
        document.getElementById("tableContent").appendChild(nodetr);

        var imgNodeC = document.createElement("img");
        imgNodeC.setAttribute("src", getImgSourceC(computerChoice));
        var nodeComptd = document.createElement("td");
        nodeComptd.appendChild(imgNodeC);
        nodetr.appendChild(nodeComptd);
        document.getElementById("tableContent").appendChild(nodetr);

        document.getElementById("resultDisplay").appendChild(node);
    }

    else if (winner == 1) {
        
        var imgNodeP = document.createElement("img");
        imgNodeP.setAttribute("src", getImgSourceP(playerChoice));
        var nodetr = document.createElement("tr");
        var nodePlayertd = document.createElement("td");
        nodePlayertd.appendChild(imgNodeP);
        nodetr.appendChild(nodePlayertd);
        document.getElementById("tableContent").appendChild(nodetr);
        
        var imgNodeR = document.createElement("img");
        imgNodeR.setAttribute("src", "images/winner.png");
        var nodetd = document.createElement("td");
        nodetd.appendChild(imgNodeR);
        nodetr.appendChild(nodetd);
        document.getElementById("tableContent").appendChild(nodetr);

        var imgNodeC = document.createElement("img");
        imgNodeC.setAttribute("src", getImgSourceC(computerChoice));
        var nodeComptd = document.createElement("td");
        nodeComptd.appendChild(imgNodeC);
        nodetr.appendChild(nodeComptd);
        document.getElementById("tableContent").appendChild(nodetr);
                
        playerScore += 1;
        updateScoreboard(computerScore, playerScore);
        winnerCheck(computerScore, playerScore);

    }

    else if (winner == 2) {
        var nodetr = document.createElement("tr");

        var imgNodeP = document.createElement("img");
        imgNodeP.setAttribute("src", getImgSourceP(playerChoice));
        var nodePlayertd = document.createElement("td");
        nodePlayertd.appendChild(imgNodeP);
        nodetr.appendChild(nodePlayertd);
        document.getElementById("tableContent").appendChild(nodetr);
        
        var imgNodeR = document.createElement("img");
        imgNodeR.setAttribute("src", "images/loser.png");
        var nodetd = document.createElement("td");
        nodetd.appendChild(imgNodeR);
        nodetr.appendChild(nodetd);
        document.getElementById("tableContent").appendChild(nodetr);

        var imgNodeC = document.createElement("img");
        imgNodeC.setAttribute("src", getImgSourceC(computerChoice));
        var nodeComptd = document.createElement("td");
        nodeComptd.appendChild(imgNodeC);
        nodetr.appendChild(nodeComptd);
        document.getElementById("tableContent").appendChild(nodetr);

        computerScore += 1;

        updateScoreboard(computerScore, playerScore);
        winnerCheck(computerScore, playerScore);
    }
}

function getImgSourceP(playerChoice) {
    if (playerChoice == "ROCK") {
        return "images/Rock.png"
    }

    else if (playerChoice == "PAPER") {
        return "images/Paper.png"
    }

    else if (playerChoice == "SCISSORS") {
        return "images/Scissors.png"
    }
}

function getImgSourceC(computerChoice) {
    if (computerChoice == "ROCK") {
        return "images/Rock.png"
    }

    else if (computerChoice == "PAPER") {
        return "images/Paper.png"
    }

    else if (computerChoice == "SCISSORS") {
        return "images/Scissors.png"
    }
}

function winnerCheck(cScore, pScore) {
    if (cScore == 5) {
        document.getElementById("instructions").innerHTML = "Computer wins the match...Press restart to get revenge!";
        addRestartButton();
    }

    if (pScore == 5) {
        document.getElementById("instructions").innerHTML = "Player wins the match! Press restart to play again.";
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

function reset() {
    clearDiv("wrapper");
    document.getElementById("wrapper").innerHTML = resetPage;
    computerScore = 0;
    playerScore = 0;
    document.querySelector("#r").addEventListener("click", playerRock);
    document.querySelector("#p").addEventListener("click", playerPaper);
    document.querySelector("#s").addEventListener("click", playerScissors);
}