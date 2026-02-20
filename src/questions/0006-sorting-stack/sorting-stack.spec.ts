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
});
