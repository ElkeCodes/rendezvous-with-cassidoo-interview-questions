export function allUnique(text: string): boolean {
  return text
    .split("")
    .every((character, index) => text.indexOf(character) === index);
}
