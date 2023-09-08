const gameBoard = document.querySelector('#gameBoard');
const gameInfo = document.querySelector('#info');

const gameArr = ['', '', '', '', '', '', '', '', ''];

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
    console.log(e.target);
}