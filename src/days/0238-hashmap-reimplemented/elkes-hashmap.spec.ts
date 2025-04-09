import { describe, expect, test } from "vitest";
import { ElkesHashMap } from "./elkes-hashmap";

describe("day #0238", () => {
  test("if data can be put and removed from the hashmap", () => {
    const hashmap = new ElkesHashMap();
    expect(hashmap.get(1)).toBe(-1);
    hashmap.put(1, 2);
    expect(hashmap.get(1)).toBe(2);
    hashmap.remove(1);
    expect(hashmap.get(1)).toBe(-1);
  });
  test("data gets overwritten if we put on the same key twice", () => {
    const hashmap = new ElkesHashMap();
    expect(hashmap.get(1)).toBe(-1);
    hashmap.put(1, 2);
    expect(hashmap.get(1)).toBe(2);
    hashmap.put(1, 3);
    expect(hashmap.get(1)).toBe(3);
  });
});
