// Your code here
let chosenColor = "red";
const table = document.getElementsByTagName("table")[0];
const addRowButton = document.getElementById("add-row");
const selectElement = document.querySelector("#select");

function makeRow() {
  const row = document.createElement("tr");

  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }

  table.appendChild(row);
}

addRowButton.addEventListener("click", makeRow);

function colorize(event) {
  const target = event.target;
  if (target.tagName === "td") {
    if (target.className === chosenColor) {
      target.className = "";
    } else {
      target.className = chosenColor;
    }
  }

  // switch (target.className) {
  //   case target.className === "blue":
  //     target.className = chosenColor;
  //     break;

  //   default:
  //     target.className = "";
  // }
}

table.addEventListener("click", colorize);

selectElement.addEventListener("change", (event) => {
  chosenColor = event.target.value;
});
