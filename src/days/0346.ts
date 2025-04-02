function hasUniqueDigits(n: number): boolean {
  const allDigits = n.toString().split("");
  return allDigits.length === new Set(allDigits).size;
}

export function uniqueSum(input: Array<number>): number {
  return input.reduce((acc, n) => {
    if (hasUniqueDigits(n)) {
      return acc + n;
    } else {
      return acc;
    }
  }, 0);
}
