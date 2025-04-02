import { describe, expect, test } from "vitest";
import { mealPrep } from "./0380";

describe("day #0380", () => {
  test("examples", () => {
    expect(mealPrep([120])).toBe(2);
    expect(mealPrep([30, 30, 30, 20])).toBe(1);
    expect(mealPrep([30, 25, 45, 30, 60, 15])).toBe(2);
  });
});
