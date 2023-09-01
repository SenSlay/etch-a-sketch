const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++ ) { 
    const rows = document.createElement("div");
    rows.classList.add("row");

    for (let j = 0; j < 16; j++) {
        const boxes = document.createElement("div");
        boxes.classList.add("box");

        rows.appendChild(boxes);
    }
    grid.appendChild(rows)
};