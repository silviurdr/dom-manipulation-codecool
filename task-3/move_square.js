// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();
// const moves = {
//     '97': moveLeft,
//     '115': moveDown,
//     '119': moveUp,
//     '100': moveRight
// };

const moveLeft = () => {

}


function main() {
    // event handlers and other code here

    mainContainer = document.getElementsByClassName('container')[0];
    console.log(mainContainer);

    for (let i = 0; i < 100; i++) {
        newCell = document.createElement('div');
        newCell.classList.add('cell');
        mainContainer.appendChild(newCell);
    }

    allCells = document.getElementsByClassName('cell');
    blockedCells = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6], allCells[7],
        allCells[8], allCells[9]
    ];

    window.addEventListener("keypress", function (event) {

        for (cell of allCells) {

            if (cell.classList.contains("active")) {
                
              console.log("iepuri");

              if (!blockedCells.includes(cell)) {
                console.log(event.keyCode);
                switch (event.keyCode) {
                  case 97:
                    console.log("left");
                    cell.classList.remove("active");
                    cell.previousSibling.classList.add("active");
                    break;
                  case 115:
                    console.log("down");
                    break;
                  case 119:
                    console.log("up");
                  case 100:
                    console.log("right");
                    cell.classList.remove("active");
                    cell.nextSibling.classList.add("active");
                    break;
                }
              }
            }

        }          
    });
    
    for (cell of allCells) {
        cell.addEventListener("click", function () {

            event.target.classList.add("active")
            let updatedCells = document.getElementsByClassName('cell');
            for (updatedCell of updatedCells) {
                if (updatedCell != event.target) {
                    updatedCell.classList.remove("active");
                }
            }
        });
            
    }
}

main();
