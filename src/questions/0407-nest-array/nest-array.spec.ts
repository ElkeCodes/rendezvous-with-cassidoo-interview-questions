import { describe, expect, test } from "vitest";
import { nestArray } from "./nest-array";

describe("question #0407", () => {
  test("examples", () => {
    expect(nestArray([1, 2, 3, 4])).toStrictEqual([1, [2, [3, [4]]]]);
    expect(nestArray([1])).toStrictEqual([1]);
  });
  test("creating a nested array can be flattened again to the original", () => {
    expect(nestArray([1, 2, 3, 4]).flat(3)).toStrictEqual([1, 2, 3, 4]);
    expect(nestArray([1]).flat()).toStrictEqual([1]);
  });
});
