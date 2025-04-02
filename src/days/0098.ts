type Occurence = { highestIndex: number; amount: number; character: string };

export function nonRepeat(input: string): string {
  let occurences: Array<Occurence> = [];
  input
    .split("")
    .reverse()
    .forEach((character, index) => {
      const found = occurences.findIndex((o) => o.character === character);
      if (found !== -1) {
        occurences[found] = {
          ...occurences[found],
          amount: occurences[found].amount + 1,
        };
      } else {
        occurences.push({
          character,
          highestIndex: index,
          amount: 1,
        });
      }
    });

  return occurences
    .filter(({ amount }) => amount === 1)
    .sort(
      ({ highestIndex: highestIndexA }, { highestIndex: highestIndexB }) =>
        highestIndexA - highestIndexB,
    ).at(0)!.character;
}
