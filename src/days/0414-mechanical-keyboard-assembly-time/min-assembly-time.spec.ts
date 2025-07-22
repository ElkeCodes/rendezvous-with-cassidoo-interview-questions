import { describe, expect, test } from "vitest";
import { minAssemblyTime } from "./min-assembly-time";

describe("day #0414", () => {
  test("example", () => {
    expect(
      minAssemblyTime([
        { name: "keycaps", arrivalDays: 1, assemblyHours: 2 },
        { name: "switches", arrivalDays: 2, assemblyHours: 3 },
        { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
        { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
        { name: "case", arrivalDays: 3, assemblyHours: 2 },
      ]),
    ).toBe(74);
  });

  test("everything arrives on the same day", () => {
    expect(
      minAssemblyTime([
        { name: "keycaps", arrivalDays: 0, assemblyHours: 2 },
        { name: "switches", arrivalDays: 0, assemblyHours: 3 },
        { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
        { name: "PCB", arrivalDays: 0, assemblyHours: 4 },
        { name: "case", arrivalDays: 0, assemblyHours: 2 },
      ]),
    ).toBe(12);
  })

  test("assembling takes more than a day for the last part", () => {
    expect(
      minAssemblyTime([
        { name: "keycaps", arrivalDays: 1, assemblyHours: 2 },
        { name: "switches", arrivalDays: 2, assemblyHours: 3 },
        { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
        { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
        { name: "case", arrivalDays: 3, assemblyHours: 25 },
      ]),
    ).toBe(97);
  })

  test("assembling takes more than a day for the second to last part", () => {
    expect(
      minAssemblyTime([
        { name: "keycaps", arrivalDays: 1, assemblyHours: 2 },
        { name: "switches", arrivalDays: 2, assemblyHours: 30 },
        { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
        { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
        { name: "case", arrivalDays: 3, assemblyHours: 2 },
      ]),
    ).toBe(80);
  })

  test("assembling takes more than a day for a part that does not impact the final time", () => {
    expect(
      minAssemblyTime([
        { name: "keycaps", arrivalDays: 1, assemblyHours: 26 },
        { name: "switches", arrivalDays: 2, assemblyHours: 3 },
        { name: "stabilizers", arrivalDays: 0, assemblyHours: 1 },
        { name: "PCB", arrivalDays: 1, assemblyHours: 4 },
        { name: "case", arrivalDays: 3, assemblyHours: 2 },
      ]),
    ).toBe(74);
  })
});
