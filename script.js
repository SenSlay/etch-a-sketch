const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const sizeSldier = document.getElementById("grid-size-slider");

// Change dimensions of grid based on user input
sizeSldier.addEventListener("input", () => {
  document.getElementById("grid-size").innerHTML = sizeSldier.value + "x" + sizeSldier.value; 
  
  // Delete existing grid
  grid.innerHTML = "";

  // Create new grid with new size
  createGrid(sizeSldier.value);

  // Give new grid boxes color function
  boxColorFunction();
});

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

// Give grid boxes coloring function
function boxColorFunction() {
    const boxes = document.querySelectorAll(".box");
    let isMouseDown = false;
    
    boxes.forEach((box) => {
      box.addEventListener("mousedown", () => {
        isMouseDown = true;
        box.style.backgroundColor = checkBrushType();
      });
    
      box.addEventListener("mouseup", () => {
        isMouseDown = false;
      });
    
      box.addEventListener("mouseenter", () => {
        if (isMouseDown) {
          box.style.backgroundColor = checkBrushType();
        }
      });
    
      box.addEventListener("mouseleave", () => {
        if (isMouseDown) {
          box.style.backgroundColor = checkBrushType();
        }
      });
    });
};
  
// Random color generator
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const radioBtns = document.querySelectorAll('input[name="control-btn"]');
const colorPicked = document.getElementById("color-picker");
const colorBtn = document.getElementById("radio1");

// Check for brush type
function checkBrushType() {
  var selectedBtn = "";

  // Check which button is selected
  radioBtns.forEach((btn) => {
    if (btn.checked) {
      selectedBtn = btn.id;
    }
  });

  // Adjust brush color accordingly
  if (selectedBtn == "color") {
    return colorPicked.value;
  
  } else if (selectedBtn == "rainbow") {
    return getRandomColor();

  } else if (selectedBtn == "eraser") {
    return "white";
  };
};

const clearBtn = document.getElementById("clear");

// Clear grid of color
function clearCanvas() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
};

clearBtn.addEventListener('click', clearCanvas);

createGrid();
boxColorFunction();