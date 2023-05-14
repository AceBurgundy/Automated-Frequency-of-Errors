import { Table } from "../Components/Table.js"

/**
    Creates a table with a specified number of rows.

    @param {number} numRows - The number of rows to create in the table.
*/
export function createTable(numRows) {
  // Title of the table
  const table1Title = "FREQUENCY OF WRONG"

  // Rows and columns of the table
  const table1Rows = []
  const table1Columns = ["NO.","Item #","FCR","%","Item #","FCR","%","Item #","FCR","%","Item #","FCR","%","Item #","FCR","%"]

  // Create the rows for the table
  for (let i = 1; i <= numRows; i++) {
    const row = []

    // Add the first two columns for each row
    row.push(`<td>${i}.</td>`)
    row.push(`<td>${i}</td>`)

    // Add additional columns based on condition
    if (i <= numRows) {
      row.push(`<td class="data-container"></td>`)
      row.push(`<td class="data-receiver"></td>`)
    }

    let increment = 0

    // Add remaining columns
    for (let j = 1; j <= 5; j++) {
      increment = i + 10

      if (j <= 4) {
        row.push(`<td>${increment + j * 10}</td>`)
        row.push(`<td class="data-container"></td>`)
        row.push(`<td class="data-receiver"></td>`)
      }
    }

    // Add the row to the table rows
    table1Rows.push(row)
  }

  // Create the table using the Table component
  const table1 = Table({
    title: table1Title,
    rows: table1Rows,
    columns: table1Columns,
  })

  // Render the table in the content container
  document.getElementById("content-container").innerHTML = table1
}
