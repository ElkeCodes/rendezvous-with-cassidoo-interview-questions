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

export function removeDuplicateCharacters(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      result = result.concat(s[i]);
    }
  }
  return result;
}
