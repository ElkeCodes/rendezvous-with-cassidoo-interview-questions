import { describe, expect, test } from "vitest";
import { flippedy } from "./flippedy";

describe("day #0441", () => {
  test("example", () => {
    expect(flippedy("cat and mice")).toBe("cat dna mice");
    expect(flippedy("banana healthy")).toBe("banana healthy");
  });
});
