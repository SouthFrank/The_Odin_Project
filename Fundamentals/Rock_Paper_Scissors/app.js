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

let playerWinCount = 0;
let compWinCount = 0;

//Function that plays a round between the user and computer

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

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const computerSelection = getComputerChoice();
        const playerSelection = e.target.
        innerText.toLowerCase();

        playRoundNew(playerSelection, computerSelection);

        playerScore.innerText = `The user has a score of: ${playerWinCount}.`;
        compScore.innerText = `The computer has a score of: ${compWinCount}.`;

        if(playerWinCount === 5){
            alert('You have won the game!!');
        } else if(compWinCount === 5){
            alert('You have lost the game! Better luck next time.');
        }
    })  
});