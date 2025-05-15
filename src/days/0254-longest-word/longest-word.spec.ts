import { describe, expect, test } from "vitest";
import { longestWord } from "./longest-word";

describe("day #0254", () => {
  test("example", () => {
    expect(
      longestWord("abppplee", ["able", "ale", "apple", "bale", "kangaroo"]),
    ).toBe("apple");
  });
});
