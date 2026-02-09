import { describe, expect, test } from "vitest";
import { isValidTrafficSequence } from "./is-valid-traffic-sequence";

describe("day #0408", () => {
  test("examples", () => {
    expect(
      isValidTrafficSequence(["red", "green", "yellow", "red", "green"]),
    ).toBeTruthy();
    expect(isValidTrafficSequence(["red", "yellow", "green"])).toBeFalsy();
    expect(isValidTrafficSequence([])).toBeTruthy();
  });
});
