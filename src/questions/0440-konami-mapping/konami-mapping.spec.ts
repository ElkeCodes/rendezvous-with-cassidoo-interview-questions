import { describe, expect, test } from "vitest";
import { konamiMapping } from "./konami-mapping";

describe("question #0440", () => {
  test("example", () => {
    expect(konamiMapping("xx2233454590yy11110")).toStrictEqual({
      "0": "A",
      "2": "U",
      "3": "D",
      "4": "L",
      "5": "R",
      "9": "B",
    });

    expect(konamiMapping("sduwahoda22ii0d0dbn")).toStrictEqual({
      "0": "L",
      "2": "U",
      i: "D",
      d: "R",
      b: "B",
      n: "A",
    });
  });
});
