import { describe, expect, test } from "vitest";
import { formatMarkdownTable } from "./format-markdown-table";

describe("question #0262", () => {
  test("example", () => {
    expect(
      formatMarkdownTable([
        "| Syntax | Description |",
        "| --- | ----------- |",
        "| Header | Title |",
        "| Paragraph | Text |",
      ]),
    ).toStrictEqual([
      "| Syntax    | Description |",
      "| --------- | ----------- |",
      "| Header    | Title       |",
      "| Paragraph | Text        |",
    ]);
  });
  test("invalid table", () => {
    expect(() =>
      formatMarkdownTable([
        "| Syntax | Description |",
        "| --- | ----------- |",
      ]),
    ).toThrowError("markdown table should have at least 3 lines");
  });
});
