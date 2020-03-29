
function main() {
    // event handlers and other code here

    gridContainer = document.getElementsByClassName('container')[0];


    for (let i = 0; i < 100; i++) {
        cellForGrid = document.createElement("div");
        cellForGrid.setAttribute("class", "cell");
        gridContainer.appendChild(cellForGrid);
        if (i % 10 == 0 && i != 0) {
            rowSeparator = document.createElement("br");
            gridContainer.appendChild(rowSeparator);
        }
    }

    allCells = document.getElementsByClassName('cell');

    for (let i = 0; i < 100; i++) {
      setTimeout(function changeClass() {
          allCells[i].classList.add('active');
        }, i * 500);
    }
}

main();
