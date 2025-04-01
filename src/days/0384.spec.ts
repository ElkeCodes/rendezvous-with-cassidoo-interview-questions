import { describe, expect, test } from "vitest";
import { countPerfectlyRoundCookies } from "./0384";

describe("day #0384", () => {
  test("examples", () => {
    expect(countPerfectlyRoundCookies(5n)).toBe(1);
    expect(countPerfectlyRoundCookies(10n)).toBe(2);
    expect(countPerfectlyRoundCookies(100n)).toBe(24);
  });
});
