const numberOfDistinctCharacters = (str: string): number =>
  new Set(str.split("")).size;

export function charNumSort(data: Array<string>): Array<string> {
  return data.sort((a, b) => {
    const aDistinctCharacters = numberOfDistinctCharacters(a);
    const bDistinctCharacters = numberOfDistinctCharacters(b);
    if (aDistinctCharacters === bDistinctCharacters) {
      return b.length - a.length;
    }
    return aDistinctCharacters - bDistinctCharacters;
  });
}
