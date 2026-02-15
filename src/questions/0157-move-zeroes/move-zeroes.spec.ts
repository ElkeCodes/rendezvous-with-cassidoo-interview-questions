import { describe, expect, test } from "vitest";
import { moveZeroes } from "./move-zeroes";

describe("question #0157", () => {
  test("example", () => {
    expect(moveZeroes([1, 2, 0, 1, 0, 0, 3, 6])).toStrictEqual([
      1, 2, 1, 3, 6, 0, 0, 0,
    ]);
  });
});
