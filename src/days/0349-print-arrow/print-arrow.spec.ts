import { describe, expect, test, vi } from "vitest";
import { printArrow } from "./print-arrow";

describe("day #0349", () => {
  test("example right 3", () => {
    const logSpy = vi.spyOn(console, "log");
    printArrow("right", 3);
    expect(logSpy.mock.calls).toStrictEqual([
      ["*"],
      [" *"],
      ["  *"],
      [" *"],
      ["*"],
    ]);
  });
  test("example left 5", () => {
    const logSpy = vi.spyOn(console, "log");
    printArrow("left", 5);
    expect(logSpy.mock.calls).toStrictEqual([
      ["     *"],
      ["    *"],
      ["   *"],
      ["  *"],
      [" *"],
      ["  *"],
      ["   *"],
      ["    *"],
      ["     *"],
    ]);
  });
  test("example up 2", () => {
    const logSpy = vi.spyOn(console, "log");
    printArrow("up", 2);
    expect(logSpy.mock.calls).toStrictEqual([
      [" *"],
      ["* *"],
    ]);
  });
  test("down 3 just to show all 4 directions", () => {
    const logSpy = vi.spyOn(console, "log");
    printArrow("down", 3);
    expect(logSpy.mock.calls).toStrictEqual([
      ["*   *"],
      [" * *"],
      ["  *"],
    ]);
  });
});
