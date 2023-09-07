const gameSquares = Array.from(document.querySelectorAll('.gameSquare'));


console.log(gameSquares);

let playerMarker = 'X'

gameSquares.forEach(square => {
    square.addEventListener('click', () => {
        square.textContent = playerMarker;
        if(playerMarker = 'X'){
            playerMarker = 'O';
        } else {
            playerMarker = 'X';
        }
    })
})