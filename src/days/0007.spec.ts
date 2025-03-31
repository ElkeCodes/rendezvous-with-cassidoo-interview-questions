import { describe, expect, test } from "vitest";
import { findFirstDuplicateCharacter, removeDuplicateCharacters } from "./0007";

describe("day #0007", () => {
  test("findFirstDuplicateCharacter", () => {
    expect(findFirstDuplicateCharacter("test")).toBe("t");
    expect(findFirstDuplicateCharacter("tes")).toBeUndefined();
    expect(findFirstDuplicateCharacter("")).toBeUndefined();
    expect(findFirstDuplicateCharacter("teset")).toBe("e");
  });
  test("removeDuplicateCharacters", () => {
    expect(removeDuplicateCharacters("test")).toBe("es");
    expect(removeDuplicateCharacters("tes")).toBe("tes");
    expect(removeDuplicateCharacters("")).toBe("");
    expect(removeDuplicateCharacters("teset")).toBe("s");
  });
});
