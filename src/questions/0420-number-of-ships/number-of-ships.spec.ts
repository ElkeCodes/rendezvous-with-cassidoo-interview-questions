import { describe, expect, test } from "vitest";
import { numberOfShips } from "./number-of-ships";

describe("question #0420", () => {
  test("example", () => {
    const ships = [
      ["X", "X", ".", "X"],
      [".", ".", ".", "X"],
      [".", ".", ".", "X"],
      [".", ".", ".", "."],
    ];

    expect(numberOfShips(ships)).toBe(2);
  });
   test("no ships at all", () => {
    const ships = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", ".", ".", "."],
    ];

    expect(numberOfShips(ships)).toBe(0);
  });
});
