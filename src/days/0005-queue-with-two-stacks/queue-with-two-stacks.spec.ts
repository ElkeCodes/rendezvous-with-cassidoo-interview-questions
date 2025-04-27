import { describe, expect, test } from "vitest";
import { QueueWithTwoStacks } from "./queue-with-two-stacks";

describe("day #0005", () => {
  test("if data can be queued and dequeued from the queue", () => {
    const queue = new QueueWithTwoStacks<number>();
    expect(queue.dequeue()).toBeUndefined();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBeUndefined();
  });
});
