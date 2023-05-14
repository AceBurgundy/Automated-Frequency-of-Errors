/**
    Generates the table header HTML markup for the specified columns.
    
    @param {Array<string>} columns - An array of column names.
    @returns {string} - The HTML markup for the table header.
*/
export function TableHeader(columns) {
    return `
        <thead>
            <tr>
                ${columns.map((column) => `<th>${column}</th>`).join("")}
            </tr>
        </thead>
    `
}
