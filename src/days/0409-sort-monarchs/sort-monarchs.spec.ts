import { describe, expect, test } from "vitest";
import { sortMonarchs } from "./sort-monarchs";

describe("day #0409", () => {
  test("examples", () => {
    expect(
      sortMonarchs(["Louis IX", "Louis VIII", "Philip II", "Philip I"]),
    ).toStrictEqual(["Louis VIII", "Louis IX", "Philip I", "Philip II"]);
    expect(
      sortMonarchs(["George VI", "George V", "Elizabeth II", "Edward VIII"]),
    ).toStrictEqual(["Edward VIII", "Elizabeth II", "George V", "George VI"]);
  });
  test("names with spaces", () => {
    expect(
      sortMonarchs(["Louis IX", "Louis VIII", "Jean Philip II", "Philip I"]),
    ).toStrictEqual(["Jean Philip II", "Louis VIII", "Louis IX", "Philip I"]);
  });
});
