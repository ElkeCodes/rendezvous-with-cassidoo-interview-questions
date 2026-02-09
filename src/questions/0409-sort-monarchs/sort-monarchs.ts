type RomanNumeralToOrdinalMapping = [string, number];
const romanNumerals: Array<RomanNumeralToOrdinalMapping> = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

const toOrdinalValue = (numeral: string): number =>
  romanNumerals.reduce((acc, [romanNumeral, ordinalValue]) => {
    let result = 0;
    while (numeral.startsWith(romanNumeral)) {
      numeral = numeral.substring(1);
      result += ordinalValue;
    }
    return acc + result;
  }, 0);

const getNameAndRomanNumeral = (name: string): [string, string] => {
  const temp = name.split(" ");
  return [temp.slice(0, temp.length - 1).join(" "), temp.slice(-1).at(0)!];
};

export function sortMonarchs(monarchs: Array<string>): Array<string> {
  return monarchs.sort((a, b) => {
    const [nameA, romanNumeralA] = getNameAndRomanNumeral(a);
    const [nameB, romanNumeralB] = getNameAndRomanNumeral(b);
    if (nameA === nameB) {
      return toOrdinalValue(romanNumeralA) - toOrdinalValue(romanNumeralB);
    }
    return nameA.localeCompare(nameB);
  });
}
