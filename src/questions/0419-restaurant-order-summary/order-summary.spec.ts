import { describe, expect, test } from "vitest";
import { orderSummary } from "./order-summary";

describe("day #0419", () => {
  test("examples", () => {
    const orders = [
      { table: 1, items: ["burger", "fries"] },
      { table: 2, items: ["burger", "burger", "fries"] },
      { table: 1, items: ["salad"] },
      { table: 2, items: ["fries"] },
    ];

    expect(orderSummary(orders)).toStrictEqual({
      1: { burger: 1, fries: 1, salad: 1 },
      2: { burger: 2, fries: 2 },
    });
  });

  test("no orders at all", () => {
    expect(orderSummary([])).toStrictEqual({});
  });

  test("only orders for 1 table", () => {
    const orders = [
      { table: 1, items: ["burger", "fries"] },
      { table: 1, items: ["burger", "burger", "fries"] },
      { table: 1, items: ["salad"] },
      { table: 1, items: ["fries"] },
    ];

    expect(orderSummary(orders)).toStrictEqual({
      1: { burger: 3, fries: 3, salad: 1 },
    });
  });
});
