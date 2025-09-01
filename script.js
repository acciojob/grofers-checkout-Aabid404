const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class "prices"
  const priceCells = document.querySelectorAll(".prices");

  // Calculate total
  let total = 0;
  priceCells.forEach(cell => {
    total += parseInt(cell.textContent); // convert text to number
  });

  // Prevent adding multiple total rows
  if (document.querySelector(".totalRow")) {
    document.querySelector(".totalRow").remove();
  }

  // Create new row for total
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  newRow.classList.add("totalRow"); // mark it as total row

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2"); // span across both columns
  totalCell.textContent = `Total Price = Rs ${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
