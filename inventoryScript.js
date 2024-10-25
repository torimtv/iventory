window.onload = main;

function addToTable() {
    let itemName = document.querySelector("#itemInput").value;
    let itemAmt = document.querySelector("#amtInput").value;

    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow();

    let nameCell = newRow.insertCell(0);
    let amtCell = newRow.insertCell(1);
    let editCell = newRow.insertCell(2);
    let removeCell = newRow.insertCell(3);

    nameCell.innerHTML = itemName;
    amtCell.innerHTML = itemAmt;
    editCell.innerHTML = `<input type="button" value="edit" class="editButton" onclick="editRow()">`;
    removeCell.innerHTML = `<input type="button" value="remove" class="removeButton" onclick="removeRow()">`;
}

function editRow() {
    let button = event.target;
    let row = button.closest('tr');
    let cells = row.querySelectorAll("td");
    
    if(button.value === 'edit') {
        let name = cells[0].textContent;
        let amt = cells[1].textContent;

        cells[0].innerHTML =  `<input type="text" value="${name}">`;
        cells[1].innerHTML = `<input type="text" value="${amt}">`;

        button.value = 'save'
    } else {
        let name = cells[0].querySelector("input").value;
        let amt = cells[1].querySelector("input").value;

        cells[0].textContent = name;
        cells[1].textContent = amt;

        button.value = 'edit'
    }
    
}

function removeRow() {
    let button = event.target;
    let row = button.closest('tr');
    row.remove();
}