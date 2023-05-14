/**
    Generates a new table row string based on the last row's data.
    Modifies the row number and preserves the data and empty cells.
    
    @function
    @param {Element} lastRow - The last row element.
    @returns {string} - The new row string.
*/
export function createTableRowFromLastRow(lastRow) {
    const lastRowCells = [...lastRow.children]

    let newLastRowCells = lastRowCells.map((cell, index) => {
        if (index === 0) {
        return `<td>${parseInt(cell.textContent) + 1}.</td>`
        }

        if (cell.className === "data-container" || cell.className === "data-receiver") {
        return cell.outerHTML
        }

        const inputElement = cell.querySelector("input")
        if (inputElement) {
        return `<td>${inputElement.value}</td>`
        }

        return `<td>${parseInt(cell.textContent) + 1}</td>`
    }).join("")

    return newLastRowCells
}