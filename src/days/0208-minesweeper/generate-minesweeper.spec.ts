import { describe, expect, test, vi } from "vitest";
import { generateMinesweeper } from "./generate-minesweeper";

describe("day #0208", () => {
  test("example", () => {
    const logSpy = vi.spyOn(console, "log");
    generateMinesweeper(5, [
      [1, 3],
      [3, 5],
      [2, 4],
    ]);
    expect(logSpy.mock.calls).toStrictEqual([
      ["xxxxx"],
      ["11xxx"],
      ["*21xx"],
      ["2*21x"],
      ["12*1x"],
    ]);
  });
});
