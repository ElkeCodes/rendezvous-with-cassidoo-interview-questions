import { describe, expect, test } from "vitest";
import { nearestPerfectMonths } from "./nearest-perfect-month";

describe("question #0442", () => {
  test("example", () => {
      expect(nearestPerfectMonths(2025)).toEqual({ prev: "2021-02", next: "2026-02" });
      expect(nearestPerfectMonths(2026)).toEqual({ prev: "2026-02", next: "2027-02" });
  });
});
