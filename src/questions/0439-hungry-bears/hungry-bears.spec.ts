import { describe, expect, test } from "vitest";
import { hungryBears } from "./hungry-bears";

describe("day #0439", () => {
  test("example", () => {
    const bears = [
      { name: "Baloo", hunger: 6 },
      { name: "Yogi", hunger: 9 },
      { name: "Paddington", hunger: 4 },
      { name: "Winnie", hunger: 10 },
      { name: "Chicago", hunger: 20 },
    ];

    expect(hungryBears(bears)).toStrictEqual(["Chicago", "Winnie"]);
  });
});
