
const container = document.querySelector('.grid-container');
const stylesheet = document.styleSheets[0];
const gridBtn = document.querySelector('.grid-btn');

const makeGrid = (x) => {
    const itemSize = (100/x);
    console.log(itemSize);
    for(let i = 0; i < x*x ; i++){
        const item = document.createElement('div');
        item.classList.add('grid-item');
        stylesheet.cssRules[8].style.height = `calc(${itemSize}%)`;
        console.log(stylesheet.cssRules[8].style.height);
        stylesheet.cssRules[8].style.width = `calc(${itemSize}%)`;
        console.log(stylesheet.cssRules[8].style.width);
        container.appendChild(item);
    }
}

// makeGrid(100);
gridBtn.addEventListener('click', () => {
    container.innerHTML = '';
    const gridSize = parseInt(prompt('What size would you like the grid to be?'));
    makeGrid(gridSize);
    
    const gridItems = document.querySelectorAll('.grid-item');
    console.log(gridItems);
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.toggle('grid-color');
        })
    })
})






