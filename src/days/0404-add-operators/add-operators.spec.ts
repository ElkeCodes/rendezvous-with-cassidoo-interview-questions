import { describe, expect, test } from "vitest";
import { addOperators } from "./add-operators";

describe("day #0404", () => {
  test("examples", () => {
    expect(addOperators(123, 6)).toEqual(
      expect.arrayContaining(["1*2*3", "1+2+3"]),
    );
    expect(addOperators(123, 9)).toEqual(
      expect.arrayContaining(["1*2*3", "1+2+3"]),
    );
    expect(addOperators(3456237490, 9191)).toStrictEqual([]);
  });
});
