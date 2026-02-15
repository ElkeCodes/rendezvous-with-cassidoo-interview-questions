import { describe, expect, test } from "vitest";
import { postfix } from "./postfix";

describe("question #0002", () => {
  test("example", () => {
    expect(postfix("5 4 * 6 2 / +")).toBe(23);
  });
  test("addition", () => {
    expect(postfix("5 3 +")).toBe(8);
    expect(() => postfix("3 +")).toThrowError(
      "not enough parameters to perform addition",
    );
  });
  test("subtraction", () => {
    expect(postfix("5 3 -")).toBe(2);
    expect(() => postfix("3 -")).toThrowError(
      "not enough parameters to perform subtraction",
    );
  });
  test("multiplication", () => {
    expect(postfix("5 3 *")).toBe(15);
    expect(() => postfix("3 *")).toThrowError(
      "not enough parameters to perform multiplication",
    );
  });
  test("division", () => {
    expect(postfix("6 3 /")).toBe(2);
    expect(() => postfix("3 /")).toThrowError(
      "not enough parameters to perform division",
    );
  });
});
