import { describe, expect, test } from "vitest";
import { rollCall } from "./0381";

describe("day #0381", () => {
  test("examples", () => {
    expect(rollCall(["yzneT", "ydissaC", "enimA"])).toStrictEqual([
      "Amine",
      "Cassidy",
      "Tenzy",
    ]);

    expect(
      rollCall([
        "rennuD",
        "nexiV",
        "recnarP",
        "temoC",
        "neztilB",
        "recnaD",
        "dipuC",
        "rehsaD",
        "hploduR",
      ]),
    ).toStrictEqual([
      "Blitzen",
      "Comet",
      "Cupid",
      "Dancer",
      "Dasher",
      "Dunner",
      "Prancer",
      "Rudolph",
      "Vixen",
    ]);

    expect(rollCall(["A", "B", "C"])).toStrictEqual(["A", "B", "C"]);
  });
});
