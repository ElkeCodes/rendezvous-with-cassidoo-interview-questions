import { describe, expect, test } from "vitest";
import { neighboringSumArray } from "./neighboring-sum-array";

describe("day #0421", () => {
  test("examples", () => {
    expect(neighboringSumArray([])).toBe(0);
    expect(neighboringSumArray([1])).toBe(1);
    expect(neighboringSumArray([1, 4])).toBe(10);
    expect(neighboringSumArray([1, 4, 7])).toBe(28);
    expect(neighboringSumArray([1, 4, 7, 10])).toBe(55);
    expect(neighboringSumArray([-1, -2, -3])).toBe(-14);
    expect(neighboringSumArray([0.1, 0.2, 0.3])).toBe(1.4);
    expect(
      neighboringSumArray([1, -20, 300, -4000, 50000, -600000, 7000000]),
    ).toBe(12338842);
  });
});
