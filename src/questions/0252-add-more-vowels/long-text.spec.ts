import { describe, expect, test } from "vitest";
import { longText } from "./long-text";

describe("day #0252", () => {
  test("examples", () => {
    expect(longText("hello world", 3)).toBe("heeellooo wooorld");
    expect(longText("lol", 10)).toBe("looooooooool");
  });
  test("all vowels", () => {
    expect(longText("aeiou", 2)).toBe("aaeeiioouu");
  });
});
