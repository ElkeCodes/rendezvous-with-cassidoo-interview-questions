import { describe, expect, test } from "vitest";
import { charNumSort } from "./char-num-sort";

describe("question #0155", () => {
  test("example", () => {
    expect(
      charNumSort(["Bananas", "do", "not", "grow", "in", "Mississippi"]),
    ).toStrictEqual(["do", "in", "not", "Mississippi", "Bananas", "grow"]);
  });
});
