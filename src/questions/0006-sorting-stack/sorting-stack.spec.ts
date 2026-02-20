import { describe, expect, test } from "vitest";
import { sortStack, Stack } from "./sorting-stack";

describe("question #0006", () => {
  test("if the stack can be sorted in ascending order", () => {
    const stack = new Stack<number>();
    stack.push(3);
    stack.push(1);
    stack.push(2);

    const sortedStackAsc = sortStack(stack, "asc");
    expect(sortedStackAsc.pop()).toBe(1);
    expect(sortedStackAsc.pop()).toBe(2);
    expect(sortedStackAsc.pop()).toBe(3);
  });

  test("if the stack can be sorted in descending order", () => {
    const stack = new Stack<number>();
    stack.push(3);
    stack.push(1);
    stack.push(2);

    const sortedStackDesc = sortStack(stack, "desc");
    expect(sortedStackDesc.pop()).toBe(3);
    expect(sortedStackDesc.pop()).toBe(2);
    expect(sortedStackDesc.pop()).toBe(1);
  });

  test("if the stack can be sorted descending with duplicate values", () => {
    const stack = new Stack<number>();
    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(2);
    
    const sortedStackDesc = sortStack(stack, "desc");
    expect(sortedStackDesc.pop()).toBe(3);
    expect(sortedStackDesc.pop()).toBe(2);
    expect(sortedStackDesc.pop()).toBe(2);
    expect(sortedStackDesc.pop()).toBe(1);
  }); 

  test("if the stack can be sorted ascending with string values", () => {
    const stack = new Stack<string>();
    stack.push("banana");
    stack.push("apple");
    stack.push("cherry");

    const sortedStackAsc = sortStack(stack, "asc");
    expect(sortedStackAsc.pop()).toBe("apple");
    expect(sortedStackAsc.pop()).toBe("banana");
    expect(sortedStackAsc.pop()).toBe("cherry");
  });
});
