export function removeDuplicateCharacters(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) {
      result = result.concat(s[i]);
    }
  }
  return result;
}
