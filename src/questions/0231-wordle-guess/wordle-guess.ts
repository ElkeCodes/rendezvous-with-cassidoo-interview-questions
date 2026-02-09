export function wordleGuess(guessWord: string, solutionWord: string): string {
  let result = "";
  for (let i = 0; i < 5; i++) {
    if (guessWord[i] === solutionWord[i]) {
      result += "🟩";
    } else if (solutionWord.indexOf(guessWord[i]) >= 0) {
      result += "🟨";
    } else {
      result += "⬛";
    }
  }
  return result;
}
