import { describe, expect, test } from "vitest";
import { nonRepeat } from "./non-repeat";

describe("question #0411", () => {
  test("example", () => {
    expect(nonRepeat("candy canes do taste yummy")).toBe("u");
  });
  test("all characters repeat", () => {
    expect(nonRepeat("abccba")).toBe("");
    expect(nonRepeat("abcabc")).toBe("");
    expect(nonRepeat("")).toBe("");
  });
});
