import { TableHeader } from "./TableHeader.js"
import { TableBody } from "./TableBody.js"

/**
    Renders a table component with a title, rows, and columns.

    @param {Object} props - The props for the table component.
    @param {string} props.title - The title of the table.
    @param {Array} props.rows - An array of objects representing the rows of the table.
    @param {Array} props.columns - An array of strings representing the column names of the table.
    @returns {string} - The HTML markup for the table component.
*/
export function Table({ title, rows, columns }) {
    return `
        <div id="content-container">
        <h1 id="table-name">${title}</h1>
        <table id="content-table">
            ${TableHeader(columns)}
            ${TableBody(rows)}
        </table>
        </div>
    `
}

