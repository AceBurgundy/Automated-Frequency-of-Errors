import { handleContainerClick } from "./CellClickEvent.js"
import { createTableRowFromLastRow } from "./CreateTableFromLastRow.js"

/**
    Adds a new row to a table dynamically.
    Retrieves the last row of the table body and generates a new row based on it.
    Adds event listeners to the new row's data containers to handle the input events.

    @function
    @returns {void}
*/
export function addNewRow() {
    const tableBody = document.getElementById("table-body")
    const lastRow = tableBody.lastElementChild

    const newRowCells = createTableRowFromLastRow(lastRow)
    const newRowParent = document.createElement("tr")
    newRowParent.innerHTML = newRowCells
    tableBody.appendChild(newRowParent)

    // Add event listeners to the new row
    newRowParent.querySelectorAll(".data-container").forEach(container => {
        container.addEventListener("click", (event) => handleContainerClick(event, container))
    })
}
