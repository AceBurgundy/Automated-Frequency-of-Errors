import { TableRow } from "./TableRow.js"

/**
    Generates the HTML content for the table body.
    
    @param {Array} rows - An array of rows to be rendered in the table body.
    @returns {string} - The HTML string representing the table body.
*/
export function TableBody(rows) {
    return `
        <tbody id="table-body">
            ${rows.map((row) => TableRow(row)).join("")}
        </tbody>
    `
}