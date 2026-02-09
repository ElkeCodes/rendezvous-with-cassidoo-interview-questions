const ALPHABET_CHARACTERS = /[a-z]/;

const isPalindrome = (txt: string): boolean => {
  const loop = (startIndex: number, endIndex: number) => {
    if (startIndex > endIndex) {
      return true;
    }
    const startCharacter = txt[startIndex].toLowerCase();
    const endCharacter = txt[endIndex].toLowerCase();
    if (!startCharacter.match(ALPHABET_CHARACTERS)) {
      return loop(startIndex + 1, endIndex);
    } else if (!endCharacter.match(ALPHABET_CHARACTERS)) {
      return loop(startIndex, endIndex - 1);
    } else if (startCharacter !== endCharacter) {
      return false;
    }
    return loop(startIndex + 1, endIndex - 1);
  };
  return txt != "" && loop(0, txt.length - 1);
};

export function parsePalindromes(fileContents: string): {
  amount: number;
  lineNumbers: Array<number>;
} {
  const lines = fileContents.split("\n");
  let amount = 0;
  let lineNumbers: Array<number> = [];
  lines.forEach((line, index) => {
    if (isPalindrome(line)) {
      amount++;
      lineNumbers.push(index + 1);
    }
  });
  return { amount, lineNumbers };
}
