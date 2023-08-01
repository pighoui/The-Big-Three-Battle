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

console.log(getComputerChoice());