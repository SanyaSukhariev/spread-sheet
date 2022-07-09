document.getElementById("b-1").onclick = myClick;
function myClick() {
  let rows = document.getElementById("in-1").value;
  let colums = document.getElementById("in-2").value;
  createTable(tab, rows, colums);
  document.getElementById("in-1").value = "";
  document.getElementById("in-2").value = "";
}
// let elem = document.getElementById("elem");
// elem.style.color = "green";
let tab = document.getElementById("el");
function createTable(parent, cols, rows) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  parent.appendChild(table);
}
