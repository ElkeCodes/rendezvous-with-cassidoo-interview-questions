import { describe, expect, test } from "vitest";
import { longestCommonPrefix } from "./longest-common-prefix";

describe("question #0403", () => {
  test("examples", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("flow");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
    expect(
      longestCommonPrefix(["interstellar", "internet", "interval"]),
    ).toEqual("inter");
  });
});
