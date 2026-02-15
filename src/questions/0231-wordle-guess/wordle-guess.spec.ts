import { describe, expect, test } from "vitest";
import { wordleGuess } from "./wordle-guess";

describe("question #0231", () => {
  test("examples", () => {
    let solutionWord = "fudge";
    expect(wordleGuess("reads", solutionWord)).toBe("⬛🟨⬛🟨⬛");
    expect(wordleGuess("lodge", solutionWord)).toBe("⬛⬛🟩🟩🟩");
  });
});
