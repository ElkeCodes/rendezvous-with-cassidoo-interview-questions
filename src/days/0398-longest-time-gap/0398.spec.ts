import { describe, expect, test } from "vitest";
import { findLongestTimeGap } from "./0398";

describe("day #0398", () => {
  test("examples", () => {
    expect(findLongestTimeGap(["12:00"])).toBe(0);
    expect(findLongestTimeGap(["09:00", "11:00"])).toBe(120);
    expect(findLongestTimeGap(["14:00", "09:00", "15:00", "10:30"])).toBe(210);
    expect(findLongestTimeGap(["08:00", "10:00", "10:00", "14:00"])).toBe(240);
  });
});
