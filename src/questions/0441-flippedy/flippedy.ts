function countVowels(word: string): number {
  return word.split("").filter((char) => "aeiou".includes(char)).length;
}

export function flippedy(str: string): string {
  let vowelCount = 0;
  return str
    .split(" ")
    .map((word, index) => {
      if (index == 0) {
        vowelCount = countVowels(word);
        return word;
      }
      if (countVowels(word) == vowelCount) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}
