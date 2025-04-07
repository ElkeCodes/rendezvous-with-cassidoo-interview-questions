import { describe, expect, test } from "vitest";
import { getSurroundingCoordinates, largestIsland } from "./0345";

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

  test("getSurroundingCoordinates", () => {
    expect(getSurroundingCoordinates({ x: 0, y: 0 }, 3, 5)).toStrictEqual([
      {
        x: 1,
        y: 0,
      },
      {
        x: 0,
        y: 1,
      },
    ]);
    expect(getSurroundingCoordinates({ x: 3, y: 5 }, 3, 5)).toStrictEqual([
      {
        x: 2,
        y: 5,
      },
      {
        x: 3,
        y: 4,
      },
    ]);
    expect(getSurroundingCoordinates({ x: 2, y: 3 }, 3, 5)).toStrictEqual([
      {
        x: 1,
        y: 3,
      },
      {
        x: 3,
        y: 3,
      },
      {
        x: 2,
        y: 2,
      },
      {
        x: 2,
        y: 4,
      },
    ]);
  });
});
