const divGrid = document.querySelector("#div-grid");

function drawGrid() {
    let row = 1;
    let column = 1;

    for (let i = 1; i <= (16 * 16); ++i) {

        let divItem = document.createElement("div");
        divItem.setAttribute("class", "grid-cell");
        
        divItem.textContent = "test" + i;

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




window.onload = drawGrid; // Allows function drawGrid to be
                          // called on page load.