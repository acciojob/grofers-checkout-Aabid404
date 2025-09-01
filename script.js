const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   // Select all price cells
  const priceCells = document.querySelectorAll(".price");

  // Convert NodeList to array and sum up
  let total = 0;
  priceCells.forEach(cell => {
    total += parseInt(cell.textContent); // convert string to number
  });

  // Create new row for total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2"); // span across both columns
  totalCell.textContent = `Total Price = Rs ${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
};

getSumBtn.addEventListener("click", getSum);

