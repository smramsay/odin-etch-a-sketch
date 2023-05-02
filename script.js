const gridContainer = document.querySelector('.grid-container');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridLine = document.createElement('div');
        gridLine.classList.add('grid-line');
        for (let k = 0; k < gridSize; k++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridLine.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridLine);
    }
}

function promptNewGrid() {
    newSize = parseInt(prompt("Enter size of new grid", INIT_GRID_SIZE));
    Array.from(gridContainer.children).forEach(child => child.remove());
    createGrid(newSize);
}

const INIT_GRID_SIZE = 16;

createGrid(INIT_GRID_SIZE);

const newGridButton = document.querySelector('button');
newGridButton.addEventListener('click', promptNewGrid);