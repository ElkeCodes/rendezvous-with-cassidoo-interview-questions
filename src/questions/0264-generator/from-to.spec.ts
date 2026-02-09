import { describe, expect, test } from "vitest";
import { fromTo } from "./from-to";

describe("day #0264", () => {
  test("example", () => {
    let gen = fromTo(5, 7)
    expect(gen()).toBe(5);
    expect(gen()).toBe(6);
    expect(gen()).toBe(7);
    expect(gen()).toBe(undefined);
  });
});
