export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export function sortStack<T>(
  stack: Stack<T>,
  direction: "asc" | "desc",
): Stack<T> {
  const tempStack = new Stack<T>();

  while (!stack.isEmpty()) {
    const temp = stack.pop()!;
    while (
      !tempStack.isEmpty() &&
      ((direction === "desc" && tempStack.peek()! > temp) ||
        (direction === "asc" && tempStack.peek()! < temp))
    ) {
      stack.push(tempStack.pop()!);
    }
    tempStack.push(temp);
  }

  return tempStack;
}
