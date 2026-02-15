import { describe, expect, test } from "vitest";
import {
  getLeylandNumbersWithSet,
  getLeylandNumbers,
} from "./get-leyland-numbers";

describe("question #0399", () => {
  test("examples", () => {
    expect(getLeylandNumbers(1)).toStrictEqual([8]);
    expect(getLeylandNumbers(5)).toStrictEqual([8, 17, 32, 54, 57]);
  });
  test("extreme", () => {
    // source: https://oeis.org/A076980/list
    expect(getLeylandNumbers(41)).toStrictEqual([
      8, 17, 32, 54, 57, 100, 145, 177, 320, 368, 512, 593, 945, 1124, 1649,
      2169, 2530, 4240, 5392, 6250, 7073, 8361, 16580, 18785, 20412, 23401,
      32993, 60049, 65792, 69632, 93312, 94932, 131361, 178478, 262468, 268705,
      397585, 423393, 524649, 533169, 1048976,
    ]);
  });
  test("examples with a Set solution", () => {
    expect(getLeylandNumbersWithSet(1)).toStrictEqual([8]);
    expect(getLeylandNumbersWithSet(5)).toStrictEqual([8, 17, 32, 54, 57]);
  });
});
