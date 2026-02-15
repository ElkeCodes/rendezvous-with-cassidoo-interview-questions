import { describe, expect, test } from "vitest";
import { findFirstDuplicateCharacter} from "./find-first-duplicate-character";

describe("question #0007", () => {
  test("findFirstDuplicateCharacter", () => {
    expect(findFirstDuplicateCharacter("test")).toBe("t");
    expect(findFirstDuplicateCharacter("tes")).toBeUndefined();
    expect(findFirstDuplicateCharacter("")).toBeUndefined();
    expect(findFirstDuplicateCharacter("teset")).toBe("e");
  });
});
