import { describe, expect, test } from "vitest";
import { translateRightShift } from "./translate-right-shift";

describe("question #350", () => {
  test("examples", () => {
    expect(translateRightShift(";p; epeor")).toBe("lol wowie");
    expect(translateRightShift("ejp s, o")).toBe("who am i");
  });
});
