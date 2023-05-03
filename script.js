function modulo(x,n) {
    return ((x%n)+n)%n;
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    if (choice==0) {return "rock"}
    else if (choice==1) {return "paper"}
    else {return "scissors"}
};

function convertChoiceNum (choice) {
    if (choice=="rock") {return 0}
    else if (choice=="paper") {return 1}
    else if (choice=="scissors") {return 2}
};

function playRound(playerSelection, computerSelection) {
    const compNum = convertChoiceNum(computerSelection);
    const playerNum = convertChoiceNum(playerSelection);

    const result = modulo(playerNum-compNum, 3);
    if (result==0) {return 'draw'}
    else if (result==1) {return 'win'}
    else if (result==2) {return 'loss'};
};

function displayGame(gameResult, playerSelection, computerSelection) {
    const selector = "." + gameResult +"-counter > span"
    const scoreSpan = document.querySelector(selector)
    scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
    
    const infoSpan = document.querySelector(".results-panel .round-info > span");
    infoSpan.innerHTML = 
    "You chose " + capitalize(playerSelection)
    + " and the Computer chose " + capitalize(computerSelection);
    const resultSpan = document.querySelector(".results-panel .round-result > span");
    resultSpan.innerHTML = "This round was a " + gameResult + "!";
};



const btnList = document.querySelectorAll(".selector-panel>.btn")
btnList.forEach( (btn)=> btn.addEventListener('click', (e)=> {
    const playerSelection = e.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    const gameResult = playRound(playerSelection, computerSelection);
    displayGame(gameResult, playerSelection, computerSelection);
}));