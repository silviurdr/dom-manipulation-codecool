
const addNewItem = () => {


    const itemsForm = document.getElementById("items_form");

    let nextItemNr = itemsForm.childElementCount / 3 + 1;
    
    if (nextItemNr == 11) {
        alert("The max number of items was reached!");
        return;
    }

    const newLabelItem = document.createElement("label");
    const newLabelInput = document.createElement("INPUT");
    const newBr = document.createElement("br");

    elementsArray = [newLabelItem, newLabelInput, newBr];

    newLabelItem.setAttribute("for", `item_${nextItemNr}`);
    newLabelItem.innerText = `Item ${nextItemNr}:`;

    newLabelInput.setAttribute("type", "text");
    newLabelInput.setAttribute("id", `item_${nextItemNr}`);
    newLabelInput.setAttribute("name", `item_${nextItemNr}`);

    elementsArray.forEach(element => {
      itemsForm.appendChild(element);
    });
}


function main() {
    // event handlers and other code 
    
    const addButton = document.getElementById('add_row');

    addButton.addEventListener('click', function () {
        addNewItem()
     })
}

main();
