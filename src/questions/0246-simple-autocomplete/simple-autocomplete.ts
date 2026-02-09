const DICTIONARY: Array<string> = [
  "apple",
  "banana",
  "cranberry",
  "strawberry",
];
export function simpleAutocomplete(s: string): Array<string> {
  return DICTIONARY.filter((entry) => entry.includes(s));
}
