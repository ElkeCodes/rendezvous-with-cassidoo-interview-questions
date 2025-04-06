import { describe, expect, test } from "vitest";
import { largestIsland } from "./0345";

describe("day #0345", () => {
  test("examples", () => {
    let map = [
      [0, 1, 1, 1, 0, 0, 0, 1, 1],
      [0, 1, 1, 1, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 0, 1, 1, 1, 0],
    ];

    expect(largestIsland(map)).toBe(7);
  });
});
