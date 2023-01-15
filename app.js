// Initialize table with 5 rows of data
for (let i = 1; i <= 5; i++) {
  addRow("myTable", i, "ram", "raj", "Mumbai", "India");
}

function addRowBottom() {
  let table = document.getElementById("myTable");
  let lastRow = table.rows.length;
  addRow("myTable", lastRow, "Virat", "K", "Delhi", "India");
}

function addRowTop() {
  let table = document.getElementById("myTable");
  let newRow = table.insertRow(1);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  cell1.innerHTML = 1;
  cell2.innerHTML = "suresh";
  cell3.innerHTML = "ramesh";
  cell4.innerHTML = "Hyderabad";
  cell5.innerHTML = "India";
  
  // Update the SL.No. of existing rows
  for (let i = 2; i < table.rows.length; i++) {
    table.rows[i].cells[0].innerHTML = i;
  }
}



function addRow(tableId, rowNumber, firstName, lastName, city, country) {
  let table = document.getElementById(tableId);
  let row = table.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  cell1.innerHTML = rowNumber;
  cell2.innerHTML = firstName;
  cell3.innerHTML = lastName;
  cell4.innerHTML = city;
  cell5.innerHTML = country;
}
