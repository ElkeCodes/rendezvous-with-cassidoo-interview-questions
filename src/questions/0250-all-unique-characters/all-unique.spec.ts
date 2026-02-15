import { describe, expect, test } from "vitest";
import { allUnique } from "./all-unique";

describe("question #0250", () => {
  test("examples", () => {
    expect(allUnique("Cassidy")).toBeFalsy();
    expect(allUnique("cat & dog")).toBeFalsy();
    expect(allUnique("cat+dog")).toBeTruthy();
  });
});
