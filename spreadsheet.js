let elem = document.getElementById("elem");

elem.style.color = "green";

let input = document.querySelector("input");
console.log(input.value);

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById("body").appendChild(table);

let row_1 = document.createElement("tr");
let head_1 = document.createElement("th");
head_1.innerHTML = "аааааа";
let head_2 = document.createElement("th");
head_2.innerHTML = "ббббббббббб";
let head_3 = document.createElement("th");
head_3.innerHTML = "вввввввввввв";

row_1.appendChild(head_1);
row_1.appendChild(head_2);
row_1.appendChild(head_3);
thead.appendChild(row_1);

for (let i = 1; i <= 3; i++) {}
