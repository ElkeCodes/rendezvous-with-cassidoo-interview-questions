export const factorial = (n: bigint): bigint => {
  if (n === 1n) {
    return 1n;
  }
  return n * factorial(n - 1n);
};
