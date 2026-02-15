import { describe, expect, test } from "vitest";
import { validTriangle } from "./valid-triangle";

describe("question #0107", () => {
  test("examples", () => {
    expect(validTriangle(60, 80, 40)).toBe(true);
    expect(validTriangle(5, 5, 50)).toBe(false);
  });
});
