import { describe, expect, test } from "vitest";
import { repeatedSubstring } from "./repeated-substring";

describe("day #0108", () => {
  test("examples", () => {
    expect(repeatedSubstring("abcd", "cdabcdab")).toBe(3);
    expect(repeatedSubstring("ab", "cab")).toBe(-1);
  });
});
