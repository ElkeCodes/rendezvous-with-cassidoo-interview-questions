import { describe, expect, test } from "vitest";
import { splitByWidths } from "./split-by-widths";

describe("question #0427", () => {
  test("example", () => {
    const str = "Supercalifragilisticexpialidocious";
    const widths = [5, 9, 4];
    expect(splitByWidths(str, widths)).toStrictEqual([
      "Super",
      "califragi",
      "list",
      "icex",
      "pial",
      "idoc",
      "ious",
    ]);
  });
});
