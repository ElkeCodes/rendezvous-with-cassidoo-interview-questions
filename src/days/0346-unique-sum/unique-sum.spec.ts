import { describe, expect, test } from "vitest";
import { uniqueSum } from "./unique-sum";

describe("day #0346", () => {
  test("examples", () => {
    expect(uniqueSum([1,2,3])).toBe(6);    
    expect(uniqueSum([11,22,33])).toBe(0);    
    expect(uniqueSum([101,2,3])).toBe(5);
  });
});
