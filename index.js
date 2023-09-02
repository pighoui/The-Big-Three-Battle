// Randomly generates a computer choice
function getComputerChoice() {
    // returns 1, 2 or 3 randomly
    let randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt == 1) {
        return "nad-mod";
    } else if (randInt == 2) {
        return "fed-mod";
    } else {
        return "djo-mod";
    }
}

// Returns the winner of the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'nad') {
        if (computerSelection == 'nad-mod') { return 'Tie! Neither Nadal can grind out the other.'; }
        else if (computerSelection == 'fed-mod') { return 'You Win! Nadal beats fed-mod.'; }
        else if (computerSelection == 'djo-mod') { return 'You Lose! Djo-mod beats Nadal.'; }
    }

    else if (playerSelection == 'fed') {
        if (computerSelection == 'nad-mod') { return 'You Lose! Nad-mod beats Federer.'; }
        else if (computerSelection == 'fed-mod') { return 'Tie! The Federers seem to read every single shot that comes their way.'; }
        else if (computerSelection == 'djo-mod') { return 'You Win! Federer beats djo-mod.'; }
    }

    else if (playerSelection == 'djo') {
        if (computerSelection == 'nad-mod') { return 'You Win! Djokovic beats nad-mod.'; }
        else if (computerSelection == 'fed-mod') { return 'You Lose! Fed-mod beats Djokovic.'; }
        else if (computerSelection == 'djo-mod') { return "Tie! They're both just too fast for each other."; }
    }
}

// Increments score of players and displays scoreline
function scorer(winner) {

    if (winner.slice(0, 8) == 'You Win!') {
        playerScore += 1;
    } else if (winner.slice(0, 9) == 'You Lose!') {
        computerScore += 1;
    } 

    document.querySelector("#winnerLine").textContent = winner;
    document.querySelector("#scoreLine").textContent = `${playerScore}-${computerScore}`;
    
    if (playerScore == 5) playerVictory();
    else if (computerScore == 5) computerVictory();
}

function playerVictory() {
    document.body.innerHTML = "You have won the match.";
}

function computerVictory() {
    document.body.innerHTML = "You have lost the match.";
}

let playerScore = 0;
let computerScore = 0;

const nadImg = document.querySelector("img[src='./images/nadal.png']");
const fedImg = document.querySelector("img[src='./images/federer.png']");
const djoImg = document.querySelector("img[src='./images/djokovic.png']");

nadImg.addEventListener("click", function() {
    winnerOfRound = playRound('nad', getComputerChoice());
    scorer(winnerOfRound)
});

fedImg.addEventListener("click", function() {
    winnerOfRound = playRound('fed', getComputerChoice());
    scorer(winnerOfRound)
});

djoImg.addEventListener("click", function() {
    winnerOfRound = playRound('djo', getComputerChoice());
    scorer(winnerOfRound)
});
