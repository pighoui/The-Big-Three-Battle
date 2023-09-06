const playAgain = document.querySelector("button");

playAgain.addEventListener('click', () => {
    window.location.replace("../index.html") // Takes user to game page
})
playAgain.addEventListener('mouseover', () => {
    playAgain.classList.add("hover"); 
})
playAgain.addEventListener('mouseout', () => {
    playAgain.classList.remove("hover"); 
})