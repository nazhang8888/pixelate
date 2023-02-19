// Your code here
const table = document.getElementsByTagName("table")[0];

function makeRow() {
  const row = document.createElement("tr");

  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }

  table.appendChild(row);
}

const addRowButton = document.getElementById("add-row");
addRowButton.addEventListener("click", makeRow);
