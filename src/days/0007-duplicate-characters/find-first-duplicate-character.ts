export function findFirstDuplicateCharacter(s: string): string | undefined {
  let foundCharacters: Array<string> = [];
  return s.split("").find((x) => {
    if (foundCharacters.includes(x)) {
      return true;
    }
    foundCharacters.push(x);
    return false;
  });
}
