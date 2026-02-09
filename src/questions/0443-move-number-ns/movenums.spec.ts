import { describe, expect, test } from "vitest";
import { moveNums } from "./movenums";

describe("day #0443", () => {
  test("example", () => {
    expect(moveNums([0, 2, 0, 3, 10], 0)).toEqual([2, 3, 10, 0, 0]);
  });
});
