const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

// Create grid 
function createGrid(gridSize = 50) {
    for (let i = 0; i < gridSize; i++ ) { 
        const rows = document.createElement("div");
        rows.classList.add("row");
    
        for (let j = 0; j < gridSize; j++) {
            const boxes = document.createElement("div");
            boxes.classList.add("box");
    
            rows.appendChild(boxes);
        }
        grid.appendChild(rows)
    };
};

createGrid();