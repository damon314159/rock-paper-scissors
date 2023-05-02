function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3);
    if (randNum==0){
        return "rock"
    } else if (randNum==1){
        return "paper"
    } else {
        return "scissors"
    }
};

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();

    if (playerSelectionLower=="rock") {
        if (computerSelection=="rock"){return "Draw"}
        else if (computerSelection=="paper"){return "Lose"}
        else if (computerSelection=="scissors"){return "Win"}
    }
    else if (playerSelectionLower=="paper") {
        if (computerSelection=="rock"){return "Win"}
        else if (computerSelection=="paper"){return "Draw"}
        else if (computerSelection=="scissors"){return "Lose"}
    }
    else if (playerSelectionLower=="scissors") {
        if (computerSelection=="rock"){return "Lose"}
        else if (computerSelection=="paper"){return "Win"}
        else if (computerSelection=="scissors"){return "Draw"}
    }
    else {return "Error, invalid choice.\n"}
};

const btnList = document.querySelectorAll(".selector-panel>.btn")
btnList.forEach( (btn)=> btn.addEventListener('click', (e)=> {
    const choice = e.target.textContent.toLowerCase();
    playRound(choice, getComputerChoice());
}));