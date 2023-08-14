
const container = document.querySelector('.grid-container');

const makeGrid = () => {
    for(let i = 0; i < 256; i++){
        const item = document.createElement('div');
        item.classList.add('grid-item');
        container.appendChild(item);
    }
}

makeGrid();

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.toggle('grid-color');
    })
})

