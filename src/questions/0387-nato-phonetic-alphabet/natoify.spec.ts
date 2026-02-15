import { describe, expect, test } from "vitest";
import { natoify } from "./natoify";

describe("question #0387", () => {
  test("examples", () => {
    expect(natoify("hello world")).toBe(
      "Hotel Echo Lima Lima Oscar (space) Whiskey Oscar Romeo Lima Delta",
    );
    expect(natoify("3spooky5me")).toBe(
      "Three Sierra Papa Oscar Oscar Kilo Yankee Five Mike Echo",
    );
  });
  test("accents", () => {
    expect(natoify("Le garçon déçu s'énerva près du café")).toBe(
      "Lima Echo (space) Golf Alfa Romeo Charlie Oscar November (space) Delta Echo Charlie Uniform (space) Sierra  Echo November Echo Romeo Victor Alfa (space) Papa Romeo Echo Sierra (space) Delta Uniform (space) Charlie Alfa Foxtrot Echo",
    );
    expect(natoify("célèbre")).toBe("Charlie Echo Lima Echo Bravo Romeo Echo");
    expect(natoify("être")).toBe("Echo Tango Romeo Echo");
  });
});
