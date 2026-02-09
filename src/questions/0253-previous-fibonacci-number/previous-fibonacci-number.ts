function* fibonacci(): Generator<number, number> {
  let x = 0;
  let y = 1;
  let result = 0;
  while (true) {
    yield result;
    result = x + y;
    x = y;
    y = result;
  }
}

export function previousFibonacciNumber(fibonacciNumber: number): number {
  const fibonacciNumbers = fibonacci();
  let current = 0;
  do {
    let next = fibonacciNumbers.next().value;
    if (next === fibonacciNumber) {
      return current;
    }
    current = next;
  } while (current <= fibonacciNumber);
  return -1;
}
