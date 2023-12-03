let person = [];
let salaries = [];

function updateNameDropdown() {
    let nameDropdown = document.getElementById("nameDropdown");
    nameDropdown.innerHTML = "";

    for (let i = 0; i < person.length; i++) {
        let option = document.createElement("option");
        option.value = person[i];
        option.textContent = person[i];
        nameDropdown.appendChild(option);
    }
}

function addSalary() {
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;

    if (isNaN(salary) || name === "" || salary === "") {
        alert("Please provide a name and salary that are valid.");
        return;
    }

    person.push(name);
    salaries.push(parseFloat(salary));
    document.getElementById("name").value = "";
    document.getElementById("name").focus();
    document.getElementById("salary").value = "";
    updateNameDropdown();
}

function displayResults() {
  let avgSalary = salaries.reduce((total, salary) => total + salary, 0) / salaries.length;
  let mostSalary = Math.max(...salaries);
  let avgParagraph = document.createElement("p");
  let mostParagraph = document.createElement("p");
  let result = document.getElementById("results");
  avgParagraph.textContent = "Average Salary: " + avgSalary.toFixed(2);
  mostParagraph.textContent = "Highest Salary: " + mostSalary.toFixed(2);
  result.innerHTML = "";
  result.appendChild(avgParagraph);
  result.appendChild(mostParagraph);
}

function displaySalary() {
  let table = document.getElementById("salaryTable");
  let headerRow = document.createElement("tr");
  let nameHeader = document.createElement("th");
  let salaryHeader = document.createElement("th");
  table.innerHTML = "";
  nameHeader.textContent = "Name";
  salaryHeader.textContent = "Salary";
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(salaryHeader);
  table.appendChild(headerRow);

  for (let i = 0; i < person.length; i++) {
    let row = document.createElement("tr");
    let nameData = document.createElement("td");
    let salaryData = document.createElement("td");
    nameData.textContent = person[i];
    salaryData.textContent = salaries[i].toFixed(2);
    row.appendChild(nameData);
    row.appendChild(salaryData);
    table.appendChild(row);
  }
}

updateNameDropdown();

document.getElementById("name").focus();

document.getElementById("addButton").addEventListener("click", function() {
    document.getElementById("name").focus();
});