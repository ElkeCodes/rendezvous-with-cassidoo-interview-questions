import { describe, expect, test, vi } from "vitest";
import { drawCube } from "./draw-cube";

describe("day #0405", () => {
  test("example n=2", () => {
    const logSpy = vi.spyOn(console, "log");
    drawCube(2);
    expect(logSpy.mock.calls).toStrictEqual([
      ["  +----+"],
      [" /    /|"],
      ["+----+ |"],
      ["|    | +"],
      ["|    |/"],
      ["+----+"],
    ]);
  });

  test("example n=4", () => {
    const logSpy = vi.spyOn(console, "log");
    drawCube(4);
    expect(logSpy.mock.calls).toStrictEqual([
      ["   +--------+"],
      ["  /        /|"],
      [" /        / |"],
      ["+--------+  |"],
      ["|        |  |"],
      ["|        |  +"],
      ["|        | /"],
      ["|        |/"],
      ["+--------+"],
    ]);
  });

  test("debug n=1", () => {
    const logSpy = vi.spyOn(console, "log");
    drawCube(1);
    expect(logSpy.mock.calls).toStrictEqual([
      [" +--+"],
      ["+--+|"],
      ["|  |+"],
      ["+--+"],
    ]);
  });
});
