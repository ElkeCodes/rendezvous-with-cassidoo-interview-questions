import { describe, expect, test } from "vitest";
import { minMonsterDistance } from "./min-monster-distance";

describe("question #0416", () => {
  test("examples", () => {
    let monsters = [3, 8, 10, 15];
    let d = 6;
    expect(minMonsterDistance(monsters, d)).toBe(2);
    expect(minMonsterDistance([5, 9, 14, 18], 4)).toBe(-1);
  });
  test("no monsters", () => {
    expect(minMonsterDistance([], 10)).toBe(-1);
  });
  test("one monster", () => {
    expect(minMonsterDistance([3], 10)).toBe(-1);
  });
  test("no monster at safe distance", () => {
    expect(minMonsterDistance([1, 2, 3, 4], 10)).toBe(1);
  });
  test("all monsters at safe distance", () => {
    expect(minMonsterDistance([1, 2, 3, 4], 1)).toBe(-1);
  });
});
