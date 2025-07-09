export function permute(input: string): Array<string> {
  function inner(options: Array<string>, result: string): Array<string> {
    if (options.length === 0) {
      return [result];
    }
    return options.map((o, index) => inner(options.toSpliced(index, 1), `${result}${o}`)).flat();
  }
  return inner(input.split(''), '');
}
