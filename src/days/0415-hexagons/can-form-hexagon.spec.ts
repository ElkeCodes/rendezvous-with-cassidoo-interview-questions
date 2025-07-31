import { describe, expect, test } from "vitest";
import { canFormHexagon } from "./can-form-hexagon";

describe("day #0415", () => {
  test("examples", () => {
    expect(canFormHexagon([2, 3, 8, 8, 2, 3])).toBeTruthy();
    expect(canFormHexagon([1, 2, 3, 4, 5, 6])).toBeFalsy();
    expect(canFormHexagon([2, 2, 2, 2, 2, 2, 2])).toBeFalsy();
  });
});
