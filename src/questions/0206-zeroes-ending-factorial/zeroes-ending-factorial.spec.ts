import { describe, expect, test } from "vitest";
import { zeroesEndingFactorial } from "./zeroes-ending-factorial";

describe("question #0206", () => {
  test("example", () => {
    expect(zeroesEndingFactorial(1)).toBe(0);
    expect(zeroesEndingFactorial(5)).toBe(1);
    expect(zeroesEndingFactorial(100)).toBe(24);
  });
});
