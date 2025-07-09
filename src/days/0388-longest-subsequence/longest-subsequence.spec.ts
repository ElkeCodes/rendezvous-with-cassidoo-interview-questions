import { describe, expect, test } from "vitest";
import { longestSubsequence } from "./longest-subsequence";

describe("day #0388", () => {
  test("examples", () => {
    expect(longestSubsequence([1, 2, 3, 4, 5])).toBe(5);
    expect(longestSubsequence([4, 2, 3, 1, 5])).toBe(2);
    expect(longestSubsequence([10, 11, 7, 8, 9, 12])).toBe(3);
  });
});
