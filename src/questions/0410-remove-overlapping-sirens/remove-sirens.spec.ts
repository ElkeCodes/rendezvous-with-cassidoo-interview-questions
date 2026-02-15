import { describe, expect, test } from "vitest";
import { removeSirens } from "./remove-sirens";

describe("question #0410", () => {
  test("examples", () => {
    expect(
      removeSirens([
        { start: 1, end: 5 },
        { start: 3, end: 7 },
        { start: 6, end: 9 },
        { start: 8, end: 10 },
      ]),
    ).toBe(2);
    expect(
      removeSirens([
        { start: 0, end: 3 },
        { start: 2, end: 4 },
        { start: 5, end: 7 },
        { start: 6, end: 8 },
        { start: 8, end: 10 },
      ]),
    ).toBe(2);
  });

  test("one huge overlapping siren", () => {
    expect(
      removeSirens([
        { start: 1, end: 2 },
        { start: 3, end: 5 },
        { start: 6, end: 7 },
        { start: 8, end: 10 },
        { start: 0, end: 11 },
      ]),
    ).toBe(1);
    expect(
      removeSirens([
        { start: 0, end: 11 },
        { start: 1, end: 2 },
        { start: 3, end: 5 },
        { start: 6, end: 7 },
        { start: 8, end: 10 },
      ]),
    ).toBe(1);
  });

  test("no overlapping sirens", () => {
    expect(removeSirens([])).toBe(0);
    expect(
      removeSirens([
        { start: 1, end: 2 },
        { start: 3, end: 5 },
        { start: 6, end: 7 },
        { start: 8, end: 10 },
      ]),
    ).toBe(0);
  });
});
