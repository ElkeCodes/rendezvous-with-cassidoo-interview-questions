import { describe, expect, test } from "vitest";
import { addg } from "./addg";

describe("question #0264", () => {
  test("example", () => {
    expect(addg()).toBe(undefined);
    expect(addg(2)()).toBe(2);
    expect(addg(2)(7)()).toBe(9);
    expect(addg(3)(4)(0)()).toBe(7);
  });

  test("strings", () => {
    expect(addg()).toBe(undefined);
    expect(addg("i")()).toBe("i");
    expect(addg("i")("nt")()).toBe("int");
    expect(addg("i")("nt")("eresting")()).toBe("interesting");
  });

  test("objects", () => {
    expect(addg()).toBe(undefined);
    expect(addg({ foo: 1 })()).toStrictEqual({ foo: 1 });
    expect(addg({ foo: 1 })({ bar: 2 })()).toStrictEqual(
      "[object Object][object Object]",
    );
  });

  test("strings and numbers, starting with string", () => {
    expect(addg()).toBe(undefined);
    expect(addg("i")()).toBe("i");
    expect(addg("i")("2")()).toBe("i2");
    expect(addg("i")("2")("eresting")()).toBe("i2eresting");
  });

  test("strings and numbers, starting with number", () => {
    expect(addg()).toBe(undefined);
    expect(addg(5)()).toBe(5);
    expect(addg(5)("ive")()).toBe("5ive");
    expect(addg(5)("ive")(5)()).toBe("5ive5");
  });

  test("strings and numbers, starting with number written as a string", () => {
    expect(addg()).toBe(undefined);
    expect(addg("5")()).toBe("5");
    expect(addg("5")("ive")()).toBe("5ive");
    expect(addg("5")("ive")(5)()).toBe("5ive5");
  });

  test("booleans", () => {
    expect(addg()).toBe(undefined);
    expect(addg(true)()).toBe(true);
    expect(addg(true)(false)()).toBe(1);
    expect(addg(true)(false)(true)()).toBe(2);
  });

  test("booleans and strings", () => {
    expect(addg()).toBe(undefined);
    expect(addg(true)()).toBe(true);
    expect(addg(true)("nt")()).toBe("truent");
    expect(addg(true)("nt")(false)()).toBe("truentfalse");
  });

  test("booleans and numbers", () => {
    expect(addg()).toBe(undefined);
    expect(addg(true)()).toBe(true);
    expect(addg(true)(1)()).toBe(2);
    expect(addg(true)(1)(false)()).toBe(2);
  });

  test("booleans and numbers, starting with numbers", () => {
    expect(addg()).toBe(undefined);
    expect(addg(2)()).toBe(2);
    expect(addg(2)(true)()).toBe(3);
    expect(addg(2)(true)(1)()).toBe(4);
  });

  test("null", () => {
    expect(addg()).toBe(undefined);
    expect(addg(null)()).toBe(null);
    expect(addg(null)(null)()).toBe(0);
    expect(addg(null)(null)(null)()).toBe(0);
  });

  test("null and numbers", () => {
    expect(addg()).toBe(undefined);
    expect(addg(null)()).toBe(null);
    expect(addg(null)(2)()).toBe(2);
    expect(addg(null)(2)(null)()).toBe(2);
  });

  test("null and strings", () => {
    expect(addg()).toBe(undefined);
    expect(addg(null)()).toBe(null);
    expect(addg(null)("test")()).toBe("nulltest");
    expect(addg(null)("test")(null)()).toBe("nulltestnull");
  });

  test("BigInt", () => {
    expect(addg()).toBe(undefined);
    expect(addg(BigInt(2))()).toBe(2n);
    expect(addg(BigInt(2))(BigInt(2))()).toBe(4n);
    expect(addg(BigInt(2))(BigInt(2))(BigInt(2))()).toBe(6n);
  });
});
