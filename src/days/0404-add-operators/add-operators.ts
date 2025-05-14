export function addOperators(origin: number, target: number): Array<string> {
  let [result, ...remainder] = origin
    .toString()
    .split("")
    .map((x) => parseInt(x, 10));
  let queue = [{ remainder, result: `${result}` }];
  const operators: Array<(digit: number, result: string) => string> = [
    (digit, result) => `${result}+${digit}`,
    (digit, result) => `${result}-${digit}`,
    (digit, result) => `${result}*${digit}`,
    (digit, result) => `${result}/${digit}`,
  ];
  let results: Array<string> = [];
  while (queue.length > 0) {
    let { remainder, result } = queue.shift()!;
    const firstDigit = remainder[0];
    const newRemainder = remainder.slice(1);
    operators.forEach((operator) => {
      const finalResult = operator(firstDigit, result);
      if (newRemainder.length === 0 && eval(finalResult) === target) {
        results.push(finalResult);
      } else if (newRemainder.length > 0) {
        queue.push({
          remainder: newRemainder,
          result: finalResult,
        });
      }
    });
  }
  return results;
}
