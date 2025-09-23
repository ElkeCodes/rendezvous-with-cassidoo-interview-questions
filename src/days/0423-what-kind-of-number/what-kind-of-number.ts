type Kind = "perfect" | "abundant" | "deficient";

const getDivisors = (n: number): Array<number> => {
  let divisors = new Set<number>();
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.add(i);
      // make sure we don't add n itself if i === 1
      if (i > 1) {
        divisors.add(n / i);
      }
    }
  }
  return [...divisors];
};

export function whatKindOfNumber(n: number): Kind {
  const sum = getDivisors(n).reduce((acc, n) => acc + n, 0);
  if (sum === n) {
    return "perfect";
  } else if (sum > n) {
    return "abundant";
  } else {
    return "deficient";
  }
}
