export function squares(n: number): number {
  if (n <= 1) {
    return n;
  }
  return Math.pow(n, 2) + squares(n - 1);
}

export function squaresIterative(n: number): number {
  const loop = (n: number, total: number): number => {
    if (n <= 0) {
      return total;
    }
    return loop(n - 1, total + Math.pow(n, 2));
  };
  return loop(n, 0);
}
