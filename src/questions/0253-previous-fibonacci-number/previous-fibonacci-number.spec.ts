import { describe, expect, test } from "vitest";
import { previousFibonacciNumber } from "./previous-fibonacci-number";

describe("question #0253", () => {
  test("correct fibonacci numbers", () => {
    expect(previousFibonacciNumber(1)).toBe(0);
    expect(previousFibonacciNumber(2)).toBe(1);
    expect(previousFibonacciNumber(3)).toBe(2);
    expect(previousFibonacciNumber(5)).toBe(3);
    expect(previousFibonacciNumber(8)).toBe(5);
    expect(previousFibonacciNumber(13)).toBe(8);
  });
  test("incorrect fibonacci numbers", () => {
    expect(previousFibonacciNumber(-1)).toBe(-1);
    expect(previousFibonacciNumber(7)).toBe(-1);
  });
});
