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

let row_2 = document.createElement("tr");
let data_1 = document.createElement("td");
data_1.innerHTML = "1.";
let data_2 = document.createElement("td");
data_2.innerHTML = "James Clerk";
let data_3 = document.createElement("td");
data_3.innerHTML = "Netflix";

row_2.appendChild(data_1);
row_2.appendChild(data_2);
row_2.appendChild(data_3);
tbody.appendChild(row_2);

let row_3 = document.createElement("tr");
let row_3_data_1 = document.createElement("td");
row_3_data_1.innerHTML = "2.";
let row_3_data_2 = document.createElement("td");
row_3_data_2.innerHTML = "Adam White";
let row_3_data_3 = document.createElement("td");
row_3_data_3.innerHTML = "Microsoft";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);
