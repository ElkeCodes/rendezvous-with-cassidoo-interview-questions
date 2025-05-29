type OddSumPair = [number, number];
type OddSumPairs = Array<OddSumPair>;

export function oddSum(
  array1: Array<number>,
  array2: Array<number>,
): OddSumPairs {
  return array1.reduce((acc, number1) => {
    return [
      ...acc,
      ...(array2
        .filter((number2) => (number1 + number2) % 2 === 1)
        .map((number2) => [number1, number2]) as OddSumPairs),
    ];
  }, [] as OddSumPairs);
}
