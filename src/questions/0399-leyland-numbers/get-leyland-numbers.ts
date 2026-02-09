function* leylandGenerator(): Generator<number, number> {
  let x = 2,
    y = 2;
  while (true) {
    while (x <= y) {
      yield Math.pow(x, y) + Math.pow(y, x);
      x++;
    }
    x = 2;
    y++;
  }
}

export function getLeylandNumbers(amount: number): Array<number> {
  const leylandNumbers = leylandGenerator();
  let result: Array<number> = [];
  for (let i = 0; i < Math.pow(amount, 2); i++) {
    result.push(leylandNumbers.next().value);
  }
  return result.sort((a, b) => a - b).slice(0, amount);
}

export function getLeylandNumbersWithSet(n: number): number[] {
  const result = new Set<number>();
  for (let x = 2; result.size < n**2; x++) {
    for (let y = 2; y <= x; y++) {
      result.add(x**y + y**x);
    }
  }
  return [...result].sort((a, b) => a - b).slice(0, n);
}
