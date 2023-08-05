function getPlayerChoice() {
    let playerChoice;
    do {
    playerChoice = prompt("Choose between rock, paper and scissors!");
    playerChoice = playerChoice.toLowerCase();
    } while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors');
    return playerChoice;
}

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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        console.log('You chose ' + playerSelection);
        console.log('Computer chose ' + computerSelection)
        if (computerSelection == 'rock') { return 'Tie!'; }
        else if (computerSelection == 'paper') { return 'You Lose!'; }
        else if (computerSelection == 'scissors') { return 'You Win!'; }
    }

    else if (playerSelection == 'paper') {
        console.log('You chose ' + playerSelection);
        console.log('Computer chose ' + computerSelection)
        if (computerSelection == 'rock') { return 'You Win!'; }
        else if (computerSelection == 'paper') { return 'Tie!'; }
        else if (computerSelection == 'scissors') { return 'You Lose!'; }
    }

    else if (playerSelection == 'scissors') {
        console.log('You chose ' + playerSelection);
        console.log('Computer chose ' + computerSelection)
        if (computerSelection == 'rock') { return 'You Lose!'; }
        else if (computerSelection == 'paper') { return 'You Win!'; }
        else if (computerSelection == 'scissors') { return 'tie!'; }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    while (playerScore != 3 && computerScore != 3) {
        round = playRound( getPlayerChoice(), getComputerChoice() ) ;

        if (round == 'You Win!') {
            playerScore += 1;
            // prints winner or loser of round
            console.log(round);
        } else if (round == 'You Lose!') {
            computerScore += 1;
            console.log(round);
        } else {
            // tie
            console.log(round);
        }

        console.log('Your score is: ' +  playerScore);
        console.log('Computer score is: ' + computerScore);
    }
    if (playerScore == 3) {
        return 'YOU WON THE MATCH :)';
    } else {
        return 'you lost the match :(';
    }
}

console.log(game());

