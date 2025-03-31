function normalize(s: string): string {
  return s
    .replace(/[^\w\s]|_/g, "") // Remove punctuation and underscores
    .replace(/\s+/g, "") // Remove whitespace
    .toLowerCase(); // Convert to lowercase
}

export function isAnagram(a: string, b: string): boolean {
  const lettersToMatchA = normalize(a).split("").sort();
  const lettersToMatchB = normalize(b).split("").sort();

  if (lettersToMatchA.length !== lettersToMatchB.length) {
    return false;
  }

  return lettersToMatchA.every((x, index) => lettersToMatchB[index] === x);
}
