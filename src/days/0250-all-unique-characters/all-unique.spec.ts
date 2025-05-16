import { describe, expect, test } from "vitest";
import { allUnique } from "./all-unique";

describe("day #0250", () => {
  test("examples", () => {
    expect(allUnique("Cassidy")).toBeFalsy();
    expect(allUnique("cat & dog")).toBeFalsy();
    expect(allUnique("cat+dog")).toBeTruthy();
  });
});
