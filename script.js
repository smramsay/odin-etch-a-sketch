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
    styleSelection = document.querySelector('#fill-style').selectedOptions[0].getAttribute('value');
    switch (styleSelection) {
        case "random":
            let randomColor = [1,2,3].map(num => Math.floor(Math.random() * 256));
            event.target.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
            break;
        case "increment":
            break;
        case "black":
        default:
            event.target.style.backgroundColor = "rgb(0, 0, 0)";
            break;
    };
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