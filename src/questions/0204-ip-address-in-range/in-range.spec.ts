import { describe, expect, test } from "vitest";
import { inRange } from "./in-range";

describe("question #0204", () => {
  test("examples", () => {
    expect(inRange("192.168.4.27", "192.168.0.0/16")).toBe(true);
    expect(inRange("192.168.4.27", "192.168.1.0/24")).toBe(false);
  });
});
