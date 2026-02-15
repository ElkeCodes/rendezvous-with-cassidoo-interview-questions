import { describe, expect, test } from "vitest";
import { removeDuplicateCharacters } from "./remove-duplicate-characters";

describe("question #0007 bonus", () => {
  test("removeDuplicateCharacters", () => {
    expect(removeDuplicateCharacters("test")).toBe("es");
    expect(removeDuplicateCharacters("tes")).toBe("tes");
    expect(removeDuplicateCharacters("")).toBe("");
    expect(removeDuplicateCharacters("teset")).toBe("s");
  });
});
