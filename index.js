// Prompts user to choose rock, paper or scissors
function getPlayerChoice() {
    let playerChoice;
    do {
    playerChoice = prompt("Choose between rock, paper and scissors!");
    playerChoice = playerChoice.toLowerCase();
    } while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors');
    return playerChoice;
}

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

// Until someone has scored 3 points, the game continues
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    while (playerScore != 3 && computerScore != 3) {
        round = playRound( getPlayerChoice(), getComputerChoice() ) ;

        if (round.slice(0, 8) == 'You Win!') {
            playerScore += 1;
            console.log(round);
        } 
        
        else if (round.slice(0, 9) == 'You Lose!') {
            computerScore += 1;
            console.log(round);
        } 
        
        else {
            // tie
            console.log(round);
        }

        console.log(`${playerScore}-${computerScore}`)
    }

    if (playerScore == 3) {
        return 'YOU WON THE MATCH :)';
    } else {
        return 'you lost the match :(';
    }
}

console.log(game());

