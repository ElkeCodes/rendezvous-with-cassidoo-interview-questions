type Occurence = { index: number; amount: number };

export function nonRepeat(input: string): string {
  let occurences: Record<string, Occurence> = {};
  input.split("").forEach((character, index) => {
    const found = occurences[character];
    if (found) {
      occurences[character] = {
        ...found,
        amount: found.amount + 1,
      };
    } else {
      occurences[character] = {
        index,
        amount: 1,
      };
    }
  });

  return (
    Object.entries(occurences)
      .filter(([_, { amount }]) => amount === 1)
      .sort(
        ([_, { index: indexA }], [__, { index: indexB }]) => indexB - indexA,
      )
      .at(0)?.[0] || ""
  );
}
