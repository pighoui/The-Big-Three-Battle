function getComputerChoice() {
    // returns 1, 2 or 3 randomly
    let randInt = Math.floor(Math.random() * 3) + 1;
    if (randInt == 1) {
        return "Rock";
    } else if (randInt == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerChoice() {
    let playerChoice;
    do {
    playerChoice = prompt("Choose between rock, paper and scissors!");
    playerChoice = playerChoice.toLowerCase();
    } while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors');
    return playerChoice;
}

console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {

}

/* function game 
prompt user for selection
convert selection to lowercase 
if selection is rock
    if computerchoice is rock, return tie
    if computerchoice is paper, return you lose
    if computerchoice is scissors, return you win
    
else if ...
else if ...
else 
    return invalid input, try again*/
