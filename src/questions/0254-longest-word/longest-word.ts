export function longestWord(needle: string, haystack: Array<string>): string {
  return (
    haystack
      .filter((word) => {
        let startIndex = -1;
        return word.split("").every((character) => {
          startIndex = needle.indexOf(character, startIndex);
          return startIndex > -1;
        });
      })
      .sort((a, b) => b.length - a.length)
      .at(0) || ""
  );
}
