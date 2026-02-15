import { describe, expect, test } from "vitest";
import { createLaundryItem } from "./create-laundry-item";

describe("question #0418", () => {
  test("examples", () => {
    let towel = createLaundryItem();

    expect(towel.nextCycle()).toEqual("soak");
    expect(towel.nextCycle()).toEqual("wash");
    expect(towel.nextCycle()).toEqual("rinse");
    expect(towel.nextCycle()).toEqual("spin");
    expect(towel.nextCycle()).toEqual("dry");
    expect(towel.nextCycle()).toEqual("done");
    expect(towel.nextCycle()).toEqual("done");
  });
});
