function typeWriter() {
    
    // Newline
    if (txt.charAt(i) == '.') {
        document.getElementById("demo").innerHTML += ".</br>"; // Print a '.' followed by a newline
        i++; // Skips the '.' being printed again
    }

    // New paragraph
    if (txt.slice(i-3, i) == '………') {
        document.getElementById("demo").innerHTML = ""; // Clear the text on page
    }

    if (i < txt.length) { 
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed); // After the speed expires, run typeWriter() again
    } 
}

// Counter variable for current place in text
let i = 0;

// The duration of each character in ms
let speed = 70;

// Text
const txt = `Demonic humanoids are taking over planet Earth. Mankind is proving to be no match against their advance. But not all hope is lost……… The humanoids have challenged humanity to a three-person tennis duel. Should we win, our planet would be saved. Loss does not bear thinking of……… The Big Three have united once more to save mankind. But they cannot do it alone. Only you have the tennis mind to coordinate them. Only you can lead the charge to reclaim our planet.`

typeWriter();