import { describe, expect, test } from "vitest";
import { isAnagram } from "./0003";

describe("day #0003", () => {
  test("isAnagram", () => {
    expect(isAnagram("New York Times", "monkeys write")).toBeTruthy();
    expect(
      isAnagram("McDonald's restaurants", "Uncle Sam's standard rot"),
    ).toBeTruthy();
    expect(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")).toBeTruthy();
    expect(
      isAnagram("She Sells Sanctuary", "Satan; cruel, less shy"),
    ).toBeTruthy();
    expect(isAnagram("bad", "length")).toBeFalsy();
    expect(isAnagram("example", "testing")).toBeFalsy();
  });
});
