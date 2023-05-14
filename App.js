/**
    This script initializes a table and attaches event listeners to various buttons and cells.

    @module MainScript
 */

import { addNewRow } from "./Javascript/Functions/AddNewRow.js"
import { saveTableAsCSV } from "./Javascript/Functions/SaveTableAsCSV.js"
import { createTable } from "./Javascript/Functions/CreateTable.js"
import { handleContainerClick } from "./Javascript/Functions/CellClickEvent.js"
import { handleFrequencySetterClick } from "./Javascript/Functions/FrequencySetter.js"

/**
    Creates a table with the specified number of rows.

    @param {number} numRows - The number of rows to create in the table.
 */
createTable(30)

/**
    Attaches an event listener to the "Save as CSV" button, which triggers the saveTableAsCSV function when clicked.

    @event click
    @param {Function} saveTableAsCSV - The function to be called when the button is clicked.
 */
document.getElementById("save-as-csv").addEventListener("click", saveTableAsCSV)

/**
    Attaches an event listener to the "Set Frequency" button, which triggers the handleFrequencySetterClick function when clicked.

    @event click
    @param {Function} handleFrequencySetterClick - The function to be called when the button is clicked.
 */
document.getElementById("frequency-setter").addEventListener("click", handleFrequencySetterClick)

/**
    Attaches an event listener to the "Add New Row" button, which triggers the addNewRow function when clicked.

    @event click
    @param {Function} addNewRow - The function to be called when the button is clicked.
 */
document.getElementById("add-new-row").addEventListener("click", addNewRow)

/**
    Attaches event handlers to all cells with the class "data-container", which trigger the handleContainerClick function when clicked.

    @event click
    @param {Function} handleContainerClick - The function to be called when a cell is clicked.
 */
document.querySelectorAll(".data-container").forEach(container => {
    container.addEventListener("click", (event) => handleContainerClick(event, container))
})
