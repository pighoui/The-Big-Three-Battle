const txt = `On one sunny summer day, you're just chilling with your mates Nadal, Federer and Djokovic around the courts of Wimbledon.
            Up come three men, the spitting image of Nadal, Federer and Djokovic.
            They call themselves Lord Nadalmort, Darth Fader and the Joker (Originality™).
            They also claim to be able to take a game of tennis off your mates.
            "HA!!!" laugh your three mates at the exact same time.
            "HA!!!" laugh Lord Nadalmort, Darth Fader and the Joker in return.
            Before the egotistical maniacs come to blows, you suggest that the six of them face off in a game of 3v3 tennis.
            A date and time are agreed.
            In the week leading up to the sell-out event, your mates are no longer so sure about their chances.
            The giants of tennis have come to the realisation that they also have giant heads! They have no clue how to work together.
            As such, they have asked for your help to coordinate them during the match. `


// Counter for current place in txt
let txtIndex = 0;

// Returns the next line in txt
function nextLine() {
    for (let i = txtIndex; i < txt.length; i++) {
        if (txt.charAt(i) == '.') {
            let line = txt.slice(txtIndex, i + 1);
            txtIndex = i + 1; // Set txtIndex to start of next line
            return line;
        }
    }
}

// Clears the story, asking user if they want to start the game
function prompt() {
    document.getElementById("text").innerHTML = "";
    
}

window.addEventListener("keydown", (event) => {
    
    if (txtIndex == txt.length - 1) {
        // Reached the end of txt
        prompt()
    } else {
        document.getElementById("text").innerHTML += `${nextLine()}</br>`;
        document.querySelector("h3").innerHTML = "Press any key to continue.";
    }
    
})

