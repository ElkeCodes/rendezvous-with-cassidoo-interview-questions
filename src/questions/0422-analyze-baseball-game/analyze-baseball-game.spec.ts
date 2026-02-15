import { describe, expect, test } from "vitest";
import { analyzeBaseballGame, Inning } from "./analyze-baseball-game";

describe("question #0422", () => {
  test("example", () => {
    const innings: Array<Inning> = [
      [1, 0],
      [2, 2],
      [0, 3],
      [4, 1],
    ];
    expect(analyzeBaseballGame(innings)).toStrictEqual({
      homeTotal: 7,
      awayTotal: 6,
      homeLedInnings: [1, 2, 4],
      awayLedInnings: [3],
      winner: "home",
    });
  });

  test("away win", () => {
    const innings: Array<Inning> = [
      [0, 2],
      [3, 1],
      [0, 4],
      [1, 0],
      [2, 2],
    ];
    expect(analyzeBaseballGame(innings)).toStrictEqual({
      homeTotal: 6,
      awayTotal: 9,
      homeLedInnings: [2, 4, 5],
      awayLedInnings: [1, 3],
      winner: "away",
    });
  });
});
