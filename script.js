// Draw the grid, add event listeners when the page loads
function drawGrid() {
    let row = 1;
    let column = 1;
    const divGrid = document.querySelector("#div-grid");

    for (let i = 1; i <= (16 * 16); ++i) {

        let divItem = document.createElement("div");
        divItem.setAttribute("class", "grid-cell");
        divItem.addEventListener("mouseover", drawTrail);

        if (i % 16 !== 0) {

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

window.onload = drawGrid; // Allows function drawGrid to be
                          // called on page load.