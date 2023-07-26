


//Computer's function that will randomly return either 'Rock', 'Paper' or 'Scissors'

const getComputerChoice = () => {
    const ranNum = Math.floor(Math.random() * 3) + 1;
    if(ranNum === 1){
        return 'Rock';
    } else if(ranNum === 2){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

//Function that plays a round between the user and computer

const playRound = (playerSelection, computerSelection) => {

}