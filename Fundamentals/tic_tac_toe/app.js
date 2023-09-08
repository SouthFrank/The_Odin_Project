const gameBoard = document.querySelector('#gameBoard');
const gameInfo = document.querySelector('#info');

const gameArr = ['', '', '', '', '', '', '', '', ''];

let marker = 'circle';
gameInfo.textContent = 'Circle goes first.';

const createBoard = (() => {
    gameArr.forEach((_cell, index) => {
        const gameSquare = document.createElement('div');
        gameSquare.classList.add('square');
        gameSquare.id = index;
        gameSquare.addEventListener('click', addMarker);
        gameBoard.appendChild(gameSquare);
    })
})();

function addMarker(e) {
    const markerDisplay = document.createElement('div');
    markerDisplay.classList.add(marker);
    e.target.append(markerDisplay);
    marker = marker === 'circle' ? 'cross' : 'circle';
    gameInfo.textContent = `It is now ${marker}'s turn to go.`;
    e.target.removeEventListener('click', addMarker);
    checkScore();
}

function checkScore() {
    const allSquares = document.querySelectorAll('.square');
    console.log(allSquares);
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'))

        if(circleWins) {
            gameInfo.textContent = 'Circle Wins!!!!!';
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross'))

        if(crossWins) {
            gameInfo.textContent = 'Cross Wins!!!!!';
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }
    })
}