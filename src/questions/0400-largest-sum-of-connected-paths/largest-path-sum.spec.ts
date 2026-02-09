import { describe, expect, test } from "vitest";
import { largestPathSum } from "./largest-path-sum";

describe("day #0400", () => {
  test("examples", () => {
    expect(
      largestPathSum([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toBe(45);
    expect(
      largestPathSum([
        [5, 3],
        [2, 8],
      ]),
    ).toBe(18);
  });
  test("debugging", () => {
    expect(
      largestPathSum([
        [1, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ]),
    ).toBe(5);
    expect(
      largestPathSum([
        [1, 1, 0, 0],
        [0, 1, 0, 1],
        [1, 1, 1, 1],
      ]),
    ).toBe(7);
  });
  test("edge cases", () => {
    expect(largestPathSum([[]])).toBe(0);
    expect(largestPathSum([[0, 0, 0]])).toBe(0);
  });
});
