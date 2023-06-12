const container = document.querySelector(".container");


for (let i = 0; i < 8; i++ ) { 
    const rows = document.createElement("div");
    rows.classList.add("row");

    for (let j = 0; j < 8; j++) {
        const boxes = document.createElement("div");
        boxes.classList.add("box");

        rows.appendChild(boxes);
    }
    container.appendChild(rows)
};




