import { describe, expect, test } from "vitest";
import { compress } from "./compress";

describe("day #0402", () => {
  test("examples", () => {
    expect(compress(["a", "b", "b", "b", "c"])).toStrictEqual([
      "a",
      "b",
      "3",
      "c",
    ]);
    expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toStrictEqual([
      "a",
      "2",
      "b",
      "2",
      "c",
      "3",
    ]);
  });
  test("edge cases", () => {
    expect(compress(["a"])).toStrictEqual(["a"]);
    expect(compress([])).toStrictEqual([]);
  });
});
