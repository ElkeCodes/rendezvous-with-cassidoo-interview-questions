export function compress(data: Array<string>): Array<string> {
  const inner = (
    remainingData: Array<string>,
    result: Array<string>,
    previousCharacter: string | undefined,
    counter: number,
  ): Array<string> => {
    const addCompressedData = () => [
      ...result,
      ...(previousCharacter
        ? counter === 1
          ? [previousCharacter!]
          : [previousCharacter!, counter.toString()]
        : []),
    ];

    if (remainingData.length === 0) {
      return addCompressedData();
    } else {
      const [current, ...rest] = remainingData;
      if (current === previousCharacter) {
        return inner(rest, result, previousCharacter, counter + 1);
      } else {
        return inner(rest, addCompressedData(), current, 1);
      }
    }
  };
  return inner(data, [], undefined, 0);
}
