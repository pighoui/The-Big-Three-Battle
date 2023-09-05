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

// Highlights the icons based on player selections
function highlightIcon(playerSelection, computerSelection) {
    nadImg.classList.remove('orange');
    fedImg.classList.remove('red');
    djoImg.classList.remove('blue');

    nadModImg.classList.remove('orange');
    fedModImg.classList.remove('red');
    djoModImg.classList.remove('blue');

    if (playerSelection == 'nad') nadImg.classList.add('orange');
    else if (playerSelection == 'fed') fedImg.classList.add('red');
    else if (playerSelection == 'djo') djoImg.classList.add('blue');

    if (computerSelection == 'nad-mod') nadModImg.classList.add('orange');
    else if (computerSelection == 'fed-mod') fedModImg.classList.add('red');
    else if (computerSelection == 'djo-mod') djoModImg.classList.add('blue');
}

// Plays grunting sound upon click
function playSound(playerSelection) {
    if (playerSelection == 'nad') {
        // audio is always rewound to start, allowing quick succession of grunts
        nadAudio.currentTime = 0; 
        nadAudio.play();
    } else if (playerSelection == 'fed') {
        fedAudio.currentTime = 0; 
        fedAudio.play();
    } else if (playerSelection == 'djo') {
        djoAudio.currentTime = 0; 
        djoAudio.play();
    }    
}

// Returns the winner of the round, and calls playSound() and highlightIcon()
function playRound(playerSelection, computerSelection) {

    highlightIcon(playerSelection, computerSelection);
    playSound(playerSelection);

    if (playerSelection == 'nad') {
        if (computerSelection == 'nad-mod') {return 'Tie! Neither Nadal can grind out the other.'; }
        else if (computerSelection == 'fed-mod') { return 'You Win! Nadal shows off his prodigious speed against Darth Fader.'; }
        else if (computerSelection == 'djo-mod') { return "You Lose! As a cyborg, the Joker's shot selection is simply too clinical."; }
    }

    else if (playerSelection == 'fed') {
        if (computerSelection == 'nad-mod') { return "You Lose! Lord Nadalmort just keeps assaulting Federer's one-hander."; }
        else if (computerSelection == 'fed-mod') { return 'Tie! The Federers seem to be able to read every single shot that comes their way.'; }
        else if (computerSelection == 'djo-mod') { return 'You Win! Federer pulls off a cheeky SABR against the Joker.'; }
    }

    else if (playerSelection == 'djo') {
        if (computerSelection == 'nad-mod') { return 'You Win! Djokovic slides 4 metres to pull off an incredible passing shot against Lord Nadalmort.'; }
        else if (computerSelection == 'fed-mod') { return 'You Lose! Darth Fader conjures up a ridiculous drop shot out of nowhere.'; }
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
    
    // Changes text content of #winnerLine to return statement of playRound()
    document.querySelector("#winnerLine").textContent = winner;
    document.querySelector("#scoreLine").textContent = `${playerScore}-${computerScore}`;
    
    // Displays endscreen once someone has won
    if (playerScore == 5) window.location.replace("./end-screen/victory.html");
    else if (computerScore == 5) window.location.replace("./end-screen/defeat.html");
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

const nadModImg = document.querySelector("img[src='./images/nadal-mod.jpg']");
const fedModImg = document.querySelector("img[src='./images/federer-mod.jpg']");
const djoModImg = document.querySelector("img[src='./images/djokovic-mod.jpg']");

const nadAudio = document.querySelector("audio[src='./audio/nad_sound_effect.mp4']");
const fedAudio = document.querySelector("audio[src='./audio/fed_sound_effect.mp4']");
const djoAudio = document.querySelector("audio[src='./audio/djo_sound_effect.mp4']");

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
