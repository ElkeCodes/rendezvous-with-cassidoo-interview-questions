export function addOperators(origin: number, target: number): Array<string> {
  let [tempResult, ...remainder] = origin
    .toString()
    .split("")
    .map((x) => parseInt(x, 10));
  let queue = [{ remainder, tempResult, result: `${tempResult}` }];
  const operators: Array<
    (
      a: number,
      b: number,
      result: string,
    ) => { newTempResult: number; finalResult: string }
  > = [
    (a, b, result) => ({ newTempResult: a + b, finalResult: `${result}+${b}` }),
    (a, b, result) => ({ newTempResult: a - b, finalResult: `${result}-${b}` }),
    (a, b, result) => ({ newTempResult: a * b, finalResult: `${result}*${b}` }),
    (a, b, result) => ({ newTempResult: a / b, finalResult: `${result}/${b}` }),
  ];
  let results: Array<string> = [];
  while (queue.length > 0) {
    let { remainder, tempResult, result } = queue.shift()!;
    const firstDigit = remainder[0];
    const newRemainder = remainder.slice(1);
    operators.forEach((operator) => {
      const { newTempResult, finalResult } = operator(
        tempResult,
        firstDigit,
        result,
      );
      if (newTempResult === target) {
        results.push(finalResult);
      } else if (newRemainder.length > 0) {
        queue.push({
          remainder: newRemainder,
          tempResult: newTempResult,
          result: finalResult,
        });
      }
    });
  }
  return results;
}
