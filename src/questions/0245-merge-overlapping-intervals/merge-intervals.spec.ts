import { describe, expect, test } from "vitest";
import { mergeIntervals } from "./merge-intervals";

describe("question #0245", () => {
  test("examples", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [2, 6],
        [8, 10],
        [15, 20],
      ]),
    ).toStrictEqual([
      [1, 6],
      [8, 10],
      [15, 20],
    ]);
    expect(
      mergeIntervals([
        [1, 2],
        [2, 7],
      ]),
    ).toStrictEqual([[1, 7]]);
  });

  test("multiple overlapping elements", () => {
    expect(
      mergeIntervals([
        [4, 12],
        [1, 8],
        [2, 5],
        [3, 2],
      ]),
    ).toStrictEqual([[1, 12]]);
  });
});
