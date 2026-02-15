import { describe, expect, test } from "vitest";
import { toRomanNumeral } from "./to-roman-numeral";

describe("question #0001", () => {
  test("toRomanNumeral", () => {
    expect(toRomanNumeral(1)).toBe("I");
    expect(toRomanNumeral(2)).toBe("II");
    expect(toRomanNumeral(4)).toBe("IV");
    expect(toRomanNumeral(10)).toBe("X");
    expect(toRomanNumeral(415)).toBe("CDXV");
    expect(toRomanNumeral(484)).toBe("CDLXXXIV");
    expect(toRomanNumeral(641)).toBe("DCXLI");
    expect(toRomanNumeral(1000)).toBe("M");
    expect(toRomanNumeral(999)).toBe("CMXCIX");
  });
});
