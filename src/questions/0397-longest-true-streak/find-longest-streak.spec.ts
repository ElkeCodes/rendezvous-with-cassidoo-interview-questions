import { describe, expect, test } from "vitest";
import { findLongestStreak } from "./find-longest-streak";

describe("day #0397", () => {
  test("examples", () => {
    expect(findLongestStreak([true, true, false, true, true, true], 3)).toBe(3);
    expect(findLongestStreak([true, true, true, false, true], 4)).toBe(0);
    expect(findLongestStreak([true, true, true, true], 2)).toBe(4);
  });
});
