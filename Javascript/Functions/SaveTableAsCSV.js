/**
    saveTableAsCSV - a function that generates a CSV file from an HTML table and downloads it.

    @function
    @returns {void} 

    @description 
    This function retrieves an HTML table by its ID, and then generates a CSV file with its content.
    It starts by adding the table name to the CSV file, then adds the header names. Each cell's value 
    is then added to the CSV file. If a cell's value includes a comma, it will be wrapped in quotes to 
    avoid confusion with the separator. The generated CSV file will be downloaded automatically with 
    the name "table.csv".

    @example
    saveTableAsCSV()
*/
export function saveTableAsCSV() {

    // Retrieve table and rows
    const table = document.getElementById("content-table")
    const rows = table.getElementsByTagName("tr")

    let csvContent = ""

    // Add table name to CSV
    const tableName = document.getElementById("table-name").textContent.trim()
    csvContent += `${tableName}\n`

    // Add header names to CSV
    const headerRow = rows[0]
    const headerCells = headerRow.getElementsByTagName("th")

    for (let j = 0; j < headerCells.length; j++) {
        const headerCell = headerCells[j].textContent.trim()

        // If cell value contains a comma, wrap it in quotes
        if (headerCell.includes(",")) {
        csvContent += `"${headerCell}"`
        } else {
        csvContent += headerCell
        }

        // Add a comma after each header cell value (except the last one)
        if (j < headerCells.length - 1) {
        csvContent += ","
        }
    }

    csvContent += "\n"

    // Add table data to CSV
    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];

            let cellValue = ""

            // Check if the cell has an input element
            const inputElement = cell.querySelector("input")
            if (inputElement) {
                cellValue = inputElement.value.trim()
            } else {
                cellValue = cell.textContent.trim()
            }

            // If cell value contains a comma, wrap it in quotes
            if (cellValue.includes(",")) {
                cellValue = `"${cellValue}"`
            }

            csvContent += cellValue

            // Add a comma after each cell value (except the last one)
            if (j < cells.length - 1) {
                csvContent += ","
            }
        }

        csvContent += "\n"
    }

    // Create a Blob object with the CSV content
    const blob = new Blob([csvContent], { type: "text/csvcharset=utf-8" })

    // Create a link and simulate a click to download the CSV file
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.setAttribute("download", "table.csv")
    link.click()
}
