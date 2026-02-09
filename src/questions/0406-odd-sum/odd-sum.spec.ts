import { describe, expect, test } from "vitest";
import { oddSum } from "./odd-sum";

describe("day #0406", () => {
  test("examples", () => {
    expect(oddSum([9, 14, 6, 2, 11], [8, 4, 7, 20])).toStrictEqual([
      [9, 8],
      [9, 4],
      [9, 20],
      [14, 7],
      [6, 7],
      [2, 7],
      [11, 8],
      [11, 4],
      [11, 20],
    ]);
    expect(oddSum([2, 4, 6, 8], [10, 12, 14])).toStrictEqual([]);
  });
});
