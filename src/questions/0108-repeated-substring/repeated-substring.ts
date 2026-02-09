export function repeatedSubstring(
  originalString: string,
  substring: string,
): number {
  const inner = (str: string, counter: number): number => {
    if (str.length > substring.length + originalString.length * 2) {
      return -1;
    }
    if (str.includes(substring)) {
      return counter;
    }
    return inner(str + originalString, counter + 1);
  };
  return inner(originalString, 1);
}
