import { describe, expect, test } from "vitest";
import { whatKindOfNumber } from "./what-kind-of-number";

describe("day #0423", () => {
  test("examples", () => {
    expect(whatKindOfNumber(6)).toEqual("perfect");
    expect(whatKindOfNumber(12)).toEqual("abundant");
    expect(whatKindOfNumber(4)).toEqual("deficient");
  });
});
