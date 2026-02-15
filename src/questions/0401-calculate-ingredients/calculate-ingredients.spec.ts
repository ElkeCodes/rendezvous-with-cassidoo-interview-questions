import { describe, expect, test } from "vitest";
import { calculateIngredients } from "./calculate-ingredients";

describe("question #0401", () => {
  test("examples", () => {
    expect(
      calculateIngredients(
        [
          { name: "flour", amount: 200 }, // 200g per
          { name: "sugar", amount: 100 }, // 100g per
          { name: "eggs", amount: 2 }, // 2 eggs per
        ],
        3,
      ),
    ).toStrictEqual([
      { name: "flour", amount: 600 },
      { name: "sugar", amount: 300 },
      { name: "eggs", amount: 6 },
    ]);
  });
});
