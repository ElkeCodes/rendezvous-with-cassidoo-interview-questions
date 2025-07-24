import { describe, expect, test } from "vitest";
import { squares, squaresIterative } from "./squares";

describe("day #0364", () => {
  describe("recursive", () => {
    test("example", () => {
      expect(squares(5)).toBe(55);
      expect(squares(10)).toBe(385);
      expect(squares(25)).toBe(5525);
      expect(squares(100)).toBe(338350);
    });

    test("debug", () => {
      expect(squares(1)).toBe(1);
      expect(squares(0)).toBe(0);
    });
  });

  describe("iterative", () => {
    test("example", () => {
      expect(squaresIterative(5)).toBe(55);
      expect(squaresIterative(10)).toBe(385);
      expect(squaresIterative(25)).toBe(5525);
      expect(squaresIterative(100)).toBe(338350);
    });

    test("debug", () => {
      expect(squaresIterative(1)).toBe(1);
      expect(squaresIterative(0)).toBe(0);
    });
  });
});
