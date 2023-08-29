//Query selectors for elements that will receive manipulation

const container = document.querySelector('.grid-container');
const stylesheet = document.styleSheets[0];
const gridBtn = document.querySelector('.grid-btn');

//Function that makes a grid and applies height and width properties, that fit within the container, of x size

const makeGrid = (x) => {
    const itemSize = (100/x);
    console.log(itemSize);
    for(let i = 0; i < x*x ; i++){
        const item = document.createElement('div');
        item.classList.add('grid-item');
        stylesheet.cssRules[8].style.height = `calc(${itemSize}%)`;
        stylesheet.cssRules[8].style.width = `calc(${itemSize}%)`;
        
        container.appendChild(item);
    }
}

//Event listener that prompts the user on button press for a number, after which a grid is created based on the size selected

gridBtn.addEventListener('click', () => {
    container.innerHTML = '';
    const gridSize = parseInt(prompt('What size would you like the grid to be?'));
    makeGrid(gridSize);
    
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.toggle('grid-color');
        })
    })
})






