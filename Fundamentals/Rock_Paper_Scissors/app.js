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
}

const playerSelection = 'rock';

//Function that plays a round between the user and computer

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log('You lose! Better luck next time.');
        } else if(computerSelection === 'scissors'){
            console.log('You\'ve done it! You won!');
        } else {
            console.log('Ugh, a tie.');
        }
    }
};

const game = () => {
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
};

game();