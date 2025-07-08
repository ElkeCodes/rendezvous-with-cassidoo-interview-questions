import { describe, it, expect } from "vitest";
import { partition } from "./partition";

describe("partition", () => {
  it("should partition an array based on the predicate", () => {
    const numbers = [1, 2, 3, 4, 5];
    const isEven = (n: number) => n % 2 === 0;
    const result = partition(numbers, isEven);
    expect(result).toEqual([
      [2, 4],
      [1, 3, 5],
    ]);
  });

  it("should handle empty arrays", () => {
    const emptyArray: number[] = [];
    const isEven = (n: number) => n % 2 === 0;
    const result = partition(emptyArray, isEven);
    expect(result).toEqual([[], []]);
  });

  it("should handle all elements passing the predicate", () => {
    const numbers = [2, 4, 6, 8];
    const isEven = (n: number) => n % 2 === 0;
    const result = partition(numbers, isEven);
    expect(result).toEqual([[2, 4, 6, 8], []]);
  });

  it("should handle no elements passing the predicate", () => {
    const numbers = [1, 3, 5, 7];
    const isEven = (n: number) => n % 2 === 0;
    const result = partition(numbers, isEven);
    expect(result).toEqual([[], [1, 3, 5, 7]]);
  });

  it("should work with string arrays", () => {
    const strings = ["apple", "banana", "cherry", "date"];
    const startsWithB = (s: string) => s.startsWith("b");
    const result = partition(strings, startsWithB);
    expect(result).toEqual([["banana"], ["apple", "cherry", "date"]]);
  });

  it("should work with complex objects", () => {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
    ];
    const isOver30 = (person: { age: number }) => person.age > 30;
    const result = partition(people, isOver30);
    expect(result).toEqual([
      [{ name: "Charlie", age: 35 }],
      [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
      ],
    ]);
  });

  it("should maintain original order in both partitions", () => {
    const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
    const isLessThan4 = (n: number) => n < 4;
    const result = partition(numbers, isLessThan4);
    expect(result).toEqual([
      [3, 1, 1, 2],
      [4, 5, 9, 6],
    ]);
  });
});
