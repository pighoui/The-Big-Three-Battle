// Randomly generates a computer choice
function getComputerChoice() {
    // returns 1, 2 or 3 randomly
    let randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt == 1) {
        return "rock";
    } else if (randInt == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Returns the winner of the round
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') { return 'Tie!'; }
        else if (computerSelection == 'paper') { return 'You Lose! Paper beats rock.'; }
        else if (computerSelection == 'scissors') { return 'You Win! Rock beats scissors.'; }
    }

    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') { return 'You Win! Paper beats rock.'; }
        else if (computerSelection == 'paper') { return 'Tie!'; }
        else if (computerSelection == 'scissors') { return 'You Lose! Scissors beats paper.'; }
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') { return 'You Lose! Rock beats scissors.'; }
        else if (computerSelection == 'paper') { return 'You Win! Scissors beats paper.'; }
        else if (computerSelection == 'scissors') { return 'Tie!'; }
    }
}

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
    document.body.innerHTML = "";
}

function computerVictory() {
    document.body.innerHTML = "";
}

let playerScore = 0;
let computerScore = 0;

const rockImg = document.querySelector("img[src='./images/rock.jpg']");
const paperImg = document.querySelector("img[src='./images/paper.jpg'");
const scissorsImg = document.querySelector("img[src='./images/scissors.jpg'");

rockImg.addEventListener("click", function() {
    winnerOfRound = playRound('rock', getComputerChoice());
    scorer(winnerOfRound)
});

paperImg.addEventListener("click", function() {
    winnerOfRound = playRound('paper', getComputerChoice());
    scorer(winnerOfRound)
});

scissorsImg.addEventListener("click", function() {
    winnerOfRound = playRound('scissors', getComputerChoice());
    scorer(winnerOfRound)
});
