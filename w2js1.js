const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const tableRows = document.getElementById("myTable").rows;

searchButton.addEventListener("click", searchTable);

function searchTable() {
  const searchTerm = searchInput.value.toLowerCase();
  const rowsToShow = [];

  for (let i = 0; i < tableRows.length; i++) {
    const rowText = tableRows[i].textContent.toLowerCase();
    if (rowText.includes(searchTerm)) {
      rowsToShow.push(tableRows[i]);
    }
  }

  showPage(rowsToShow);
}

function showPage(rowsToShow) {
  const pageSize = 8;
  const currentPage = 0;
  const start = currentPage * pageSize;
  const end = start + pageSize;
  const rowsToDisplay = rowsToShow.slice(start, end);

  table.innerHTML = "";
  rowsToDisplay.forEach((row) => table.appendChild(row));

  pageNumberSpan.textContent = currentPage + 1;
}