export function formatMarkdownTable(table: Array<string>): Array<string> {
  if (table.length <= 2) {
    throw Error("markdown table should have at least 3 lines");
  }
  const rows: Array<Array<string>> = table.map((line) =>
    line
      .slice(1, -1)
      .split("|")
      .map((cell) => cell.trim()),
  );
  const colWidths = Array.from({ length: rows[0].length }, (_, colIndex) => {
    return Math.max(...rows.map((row) => row[colIndex].length));
  });
  rows[1] = rows[1].map((_, colIndex) =>
    Array.from({ length: colWidths[colIndex] }, (_) => "-").join(""),
  );
  return rows.map(
    (row) =>
      `| ${row.map((colValue, colIndex) => colValue.padEnd(colWidths[colIndex])).join(" | ")} |`,
  );
}
