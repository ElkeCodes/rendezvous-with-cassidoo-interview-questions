const factorial = (n: bigint): bigint => {
  if (n === 1n) {
    return 1n;
  }
  return n * factorial(n-1n);
}

export function countPerfectlyRoundCookies(input: bigint): number {
  function inner(n: bigint): number {
    if (n % 10n !== 0n) {
      return 0;
    }
    return 1 + inner(n / 10n)
  }
  return inner(factorial(input))
}
