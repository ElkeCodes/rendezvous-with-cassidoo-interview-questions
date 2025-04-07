import { describe, expect, test } from "vitest";
import { nonRepeat } from "./0098";

describe("day #0098", () => {
  test("example", () => {
    expect(nonRepeat('candy canes do taste yummy')).toBe("u");
  });
});
