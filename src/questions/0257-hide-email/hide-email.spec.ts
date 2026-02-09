import { describe, expect, test } from "vitest";
import { hideEmail } from "./hide-email";

describe("day #0257", () => {
  test("example", () => {
    expect(hideEmail("example@example.com")).toEqual("e*****e@example.com");
    expect(hideEmail("example+test@example.co.uk", true)).toEqual(
      "e**********t@e******.co.uk",
    );
  });
});
