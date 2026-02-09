import { describe, expect, test } from "vitest";
import { addOperators } from "./add-operators";

describe("day #0404", () => {
  test("examples", () => {
    expect(addOperators(123, 6)).toStrictEqual(["1+2+3", "1*2*3"]);
    expect(addOperators(3456237490, 9191)).toStrictEqual([]);
  });
  test("debug", () => {
    expect(addOperators(1234, 15)).toStrictEqual(["1+2+3*4"]);
    expect(addOperators(23431, 12)).toStrictEqual([
      "2+3+4+3*1",
      "2+3+4+3/1",
      "2+3*4-3+1",
      "2-3+4*3+1",
      "2*3+4+3-1",
    ]);
    expect(addOperators(13425, -6)).toStrictEqual(['1+3-4/2*5'])
  });
});
