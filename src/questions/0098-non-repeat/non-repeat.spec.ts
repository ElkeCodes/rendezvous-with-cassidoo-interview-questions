import { describe, expect, test } from "vitest";
import { nonRepeat } from "./non-repeat";

describe("day #0098", () => {
  test("example", () => {
    expect(nonRepeat('candy canes do taste yummy')).toBe("u");
  });
});
