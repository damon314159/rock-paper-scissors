function modulo(x,n){
    return ((x%n)+n)%n;
};

function getComputerChoice() {
    return Math.floor(Math.random()*3);
};

function playRound(playerSelection, computerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    let playerSelectionNum;
    if (playerSelectionLower=="rock") {playerSelectionNum = 0;}
    else if (playerSelectionLower=="paper") {playerSelectionNum = 1;}
    else if (playerSelectionLower=="scissors") {playerSelectionNum = 2;};

    const result = modulo(playerSelectionNum-computerSelection, 3);
    if (result==0) {return 'Draw'}
    else if (result==1) {return 'Win'}
    else if (result==2) {return 'Lose'};
};

const btnList = document.querySelectorAll(".selector-panel>.btn")
btnList.forEach( (btn)=> btn.addEventListener('click', (e)=> {
    const choice = e.target.textContent.toLowerCase();
    playRound(choice, getComputerChoice());
}));