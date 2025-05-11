export function maxRange(numbers: Array<number>): number {
  return numbers.reduce(
    (max, current, index) =>
      Math.max(max, Math.abs(current - numbers[Math.max(index - 1, 0)])),
    0,
  );
}
