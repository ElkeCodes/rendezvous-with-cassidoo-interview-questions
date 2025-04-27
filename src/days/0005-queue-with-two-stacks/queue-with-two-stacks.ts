export class QueueWithTwoStacks<T> {
  private dataStack: Array<T>;
  private tempStack: Array<T>;

  constructor() {
    this.dataStack = [];
    this.tempStack = [];
  }

  public enqueue(element: T) {
    this.dataStack.push(element);
  }

  public dequeue(): T | undefined {
    if (this.dataStack.length === 0) {
      return undefined;
    }
    while (this.dataStack.length > 1) {
      this.tempStack.push(this.dataStack.pop()!);
    }
    const current = this.dataStack.pop()!;
    let tempCurrent;
    while (tempCurrent = this.tempStack.pop()) {
      this.dataStack.push(tempCurrent);
    }
    return current;
  }
}
