const gridContainer = document.querySelector('.grid-container');

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridLine = document.createElement('div');
        gridLine.classList.add('grid-line');
        for (let k = 0; k < gridSize; k++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('square');
            gridSquare.addEventListener('pointerenter', hoverSquareEvent);
            gridLine.appendChild(gridSquare);
        }
        gridContainer.appendChild(gridLine);
    }
}

function hoverSquareEvent(event) {
    event.target.style.backgroundColor = 'black';
}

function promptNewGrid() {
    newSize = parseInt(prompt("Enter size of new grid", gridContainer.children.length));
    if (newSize > 100) {
        alert("Maximum size is 100!");
        return;
    }
    Array.from(gridContainer.children).forEach(child => child.remove());
    createGrid(newSize);
}

const INIT_GRID_SIZE = 16;

createGrid(INIT_GRID_SIZE);

const newGridButton = document.querySelector('button');
newGridButton.addEventListener('click', promptNewGrid);