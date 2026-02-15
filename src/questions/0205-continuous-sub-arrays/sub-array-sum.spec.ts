import { describe, expect, test } from "vitest";
import { subarraySum } from "./sub-array-sum";

describe("question #0205", () => {
  test("example", () => {
    expect(subarraySum([10, 2, -2, -20, 10], -10)).toBe(3);
  });
  test("extremes", () => {
    expect(subarraySum([], 0)).toBe(0);
    expect(subarraySum([1, 2, 3, 4, 5], 15)).toBe(1);
  });
});
