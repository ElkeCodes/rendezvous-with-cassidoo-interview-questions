import { describe, expect, test } from "vitest";
import { permute } from "./permute";

describe("day #0386", () => {
  test("example", () => {
    expect(permute("abc")).toStrictEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
  test("debug", () => {
    expect(permute("a")).toStrictEqual(["a"]);
    expect(permute("ab")).toStrictEqual(["ab", "ba"]);
    expect(permute("abcd")).toStrictEqual([
      "abcd",
      "abdc",
      "acbd",
      "acdb",
      "adbc",
      "adcb",
      "bacd",
      "badc",
      "bcad",
      "bcda",
      "bdac",
      "bdca",
      "cabd",
      "cadb",
      "cbad",
      "cbda",
      "cdab",
      "cdba",
      "dabc",
      "dacb",
      "dbac",
      "dbca",
      "dcab",
      "dcba",
    ]);
  });
});
