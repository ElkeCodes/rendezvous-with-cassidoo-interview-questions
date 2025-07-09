import { describe, expect, test } from "vitest";
import { countPerfectlyRoundCookies } from "./0384";

describe("day #0384", () => {
  test("examples", () => {
    expect(countPerfectlyRoundCookies(5)).toBe(1);
    expect(countPerfectlyRoundCookies(10)).toBe(2);
    expect(countPerfectlyRoundCookies(100)).toBe(24);
  });
});
