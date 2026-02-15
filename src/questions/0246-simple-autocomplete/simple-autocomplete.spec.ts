import { describe, expect, test } from "vitest";
import { simpleAutocomplete } from "./simple-autocomplete";

describe("question #0246", () => {
  test("examples", () => {
    expect(simpleAutocomplete("app")).toStrictEqual(["apple"]);
    expect(simpleAutocomplete("berry")).toStrictEqual([
      "cranberry",
      "strawberry",
    ]);
    expect(simpleAutocomplete("fart")).toStrictEqual([]);
  });
});
