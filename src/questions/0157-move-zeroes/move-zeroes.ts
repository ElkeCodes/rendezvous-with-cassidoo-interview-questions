export function moveZeroes(data: Array<number>): Array<number> {
  const nonZeroes = data.filter((x) => x > 0);
  const zeroes = Array.from(
    { length: data.length - nonZeroes.length },
    () => 0,
  );
  return nonZeroes.concat(zeroes);
}
