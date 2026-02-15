import { describe, expect, test } from "vitest";
import { integerDivision } from "./integer-division";

describe("question #0099", () => {
  test("examples", () => {
    expect(integerDivision(6, 3)).toBe(2);
    expect(integerDivision(99, 11)).toBe(9);
  });
  test("error message if we don't do clean integer division", () => {
    expect(() => integerDivision(2, 3)).toThrowError(
      "2 could not be divided by 3 for a proper integer result",
    );
  });
});
