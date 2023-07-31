//Computer's function that will randomly return either 'Rock', 'Paper' or 'Scissors'

const getComputerChoice = () => {
    const ranNum = Math.floor(Math.random() * 3) + 1;
    if(ranNum === 1){
        return 'rock';
    } else if(ranNum === 2){
        return 'paper';
    } else {
        return 'scissors';
    }
};

// const computerSelection = getComputerChoice();

let playerWinCount = 0;
let compWinCount = 0;

//Function that plays a round between the user and computer

// 

const playRoundNew = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection){
        return 'Ugh, tied.';
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWinCount++;
        return 'You\'ve won this round!';
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerWinCount++;
        return 'You\'ve won this round!';
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWinCount++;
        return 'You\'ve won this round!';
    } else {
        compWinCount++;
        return 'You\'ve lost this round, better luck next time!';
    }
}

const game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRoundNew(playerSelection, computerSelection));
        console.log(playerWinCount);
    }
};

game();

// console.log(playRound(playerSelection, computerSelection));