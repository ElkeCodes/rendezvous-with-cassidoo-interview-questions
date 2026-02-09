export function longestCommonPrefix(words: Array<string>) {
  const possibilities: Record<string, number> = {};
  const addPossibilitiesForWord = (word: string) => {
    if (word.length === 0) {
      return;
    }
    possibilities[word] = (possibilities[word] || 0) + 1;
    addPossibilitiesForWord(word.substring(0, word.length - 1));
  };
  words.forEach(addPossibilitiesForWord);
  const correctPossibility = Object.entries(possibilities)
    .sort(
      ([word1, occurence1], [word2, occurence2]) =>
        word2.length - word1.length || occurence2 - occurence1,
    )
    .find(([_, amount]) => amount > 1);
  return correctPossibility?.[0] || "";
}
