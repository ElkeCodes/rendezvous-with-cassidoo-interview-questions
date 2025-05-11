import { describe, expect, test } from "vitest";
import { diceCombos } from "./dice-combos";

describe("day #0103", () => {
  test("example", () => {
    expect(diceCombos(2, 4, 4)).toBe(3);
  });
});
