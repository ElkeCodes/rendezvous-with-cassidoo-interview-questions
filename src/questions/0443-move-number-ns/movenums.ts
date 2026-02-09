export function moveNums(numbers: Array<number>, k: number): Array<number> {
  let amountOfK = 0;
  return numbers
    .reduce((acc, num) => {
      if (num === k) {
        amountOfK++;
      } else {
        acc.push(num);
      }
      return acc;
    }, [] as Array<number>)
    .concat(Array(amountOfK).fill(k));
}
