const isVowel = (character: string): boolean =>
  ["a", "e", "i", "o", "u"].includes(character);

export function longText(text: string, vowels: number): string {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (isVowel(text[i])) {
      result = result.concat(...Array.from({ length: vowels }, () => text[i]));
    } else {
      result = result.concat(text[i])
    }
  }
  return result;
}
