import { describe, expect, test } from "vitest";
import { rotateArray } from "./rotate-array";

describe("day #0008", () => {
  test("example", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toStrictEqual([4, 5, 1, 2, 3]);
  });
  test("extremes", () => {
    expect(rotateArray([1, 2, 3, 4, 5], 25)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(rotateArray([1, 2, 3, 4, 5], 0)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
