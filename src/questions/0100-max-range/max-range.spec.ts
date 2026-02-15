import { describe, expect, test } from "vitest";
import { maxRange } from "./max-range";

describe("question #0100", () => {
  test("examples", () => {
    expect(maxRange([2, 2, 1, 3])).toBe(2);
    expect(maxRange([0])).toBe(0);
    expect(maxRange([4, 3, 5, 7, 1, 7, 7, 6])).toBe(6);
  });
});
