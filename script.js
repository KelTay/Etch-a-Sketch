const divGrid = document.querySelector("#div-grid");

const buttonReset = document.querySelector("#button-reset");
buttonReset.addEventListener("click", reset);

const buttonRandomColors = document.querySelector("#button-random-colors");
buttonRandomColors.addEventListener("click", randomColors);

const GRID_SIZE = 495; // Total size of the grid div in pixels.
const GAP_SIZE = 1; // Size of a gap between items, in pixels.
let size = 16; // Number of squares for one side of the grid square.
let totalGaps = (size - 1) * GAP_SIZE; // Total size of the gaps between items in pixels.

// Draw the grid
function drawGrid() {

    let row = 1;
    let column = 1;
        
    for (let i = 1; i <= (size * size); ++i) {

        let divItem = document.createElement("div");
        divItem.setAttribute("class", "grid-cell");
        divItem.addEventListener("mouseover", drawTrail);

        // If size is 16, use the CSS styles for the size.
        // Otherwise, calculate the appropriate item size.
        if (size !== 16) {

            totalGaps = (size - 1) * GAP_SIZE;
            
            let newItemSize = (GRID_SIZE - totalGaps) / size;
            divItem.style.width = newItemSize + "px";
            divItem.style.height = newItemSize + "px";
        }

        // Make sure item is not at the end of the column.
        if (i % size !== 0) {

            divItem.style.gridColumnStart = column;
            divItem.style.gridColumnEnd = column + 1;
            divItem.style.gridRowStart = row;
            divItem.style.gridRowEnd = row + 1;

            ++column;

        } else {

            divItem.style.gridColumnStart = column;
            divItem.style.gridColumnEnd = column + 1;
            divItem.style.gridRowStart = row;
            divItem.style.gridRowEnd = row + 1;

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

    if (isNaN(newSize)) {

        alert("That's not a number!");
        return;

    } else if (newSize <= 0) {

        alert("Cannot be less than or equal to zero!");
        return;
    }

    size = parseInt(newSize);
    
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