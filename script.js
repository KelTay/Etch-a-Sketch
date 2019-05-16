const divGrid = document.querySelector("#div-grid");

const buttonReset = document.querySelector("#button-reset");
buttonReset.addEventListener("click", reset);

const buttonRandomColors = document.querySelector("#button-random-colors");
buttonRandomColors.addEventListener("click", randomColors);

// Number of squares for one side of the grid square
let size = 16;

// Draw the grid, add event listeners when the page loads
function drawGrid() {
    let row = 1;
    let column = 1;
    
    for (let i = 1; i <= (size * size); ++i) {

        let divItem = document.createElement("div");
        divItem.setAttribute("class", "grid-cell");
        divItem.addEventListener("mouseover", drawTrail);

        if (i % size !== 0) {

            divItem.style.gridColumnStart = column;
            divItem.style.gridColumnEnd = column + 1;
            divItem.style.gridRowStart = row;
            divItem.style.gridRowEnd = row + 1;

            ++column;

        } else {

            ++row;
            column = 1;
        }

        divGrid.appendChild(divItem);
    }
}

// Draw a trail wherever the mouse hovers
function drawTrail() {
    this.classList.add("drawn");
}

// Prompts the user for a grid size and resets the grid
function reset() {
    let newSize = prompt("Please enter number of squares per side", "e.g. 64");
    
    if (newSize <= 0) {
        alert("Cannot be less than or equal to zero!");
    }

    size = newSize;
    
    // Remove all the old items from the grid
    while(divGrid.firstChild) {
        divGrid.removeChild(divGrid.firstChild);
    }

    drawGrid();
}

// Changes the mouseover color trail to random colors
function randomColors() {
}

window.onload = drawGrid; // Allows function drawGrid to be
                          // called on page load.