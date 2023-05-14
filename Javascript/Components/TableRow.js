/**
    Generates a table row HTML element based on the provided data.
    
    @param {Array} data - An array of values representing the cells of the table row.
    @returns {string} - The generated HTML markup for the table row.
*/
export function TableRow(data) {
    return `
        <tr>
            ${data.map(cell => cell).join("")}
        </tr>
    `
}
