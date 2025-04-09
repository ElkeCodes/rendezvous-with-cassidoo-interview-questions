export function integerDivision(a: number, b: number): number {
  if (a < b) {
    throw new Error(
      `${a} could not be divided by ${b} for a proper integer result`,
    );
  }
  if (a === b) {
    return 1;
  }
  return 1 + integerDivision(a - b, b);
}
