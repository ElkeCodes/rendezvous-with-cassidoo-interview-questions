export function hungryBears(
  bears: Array<{ name: string; hunger: number }>,
): Array<string> {
  const averageHunger =
    bears.reduce((sum, bear) => sum + bear.hunger, 0) / bears.length;
  return bears
    .filter((bear) => bear.hunger > averageHunger)
    .map((bear) => bear.name)
    .sort();
}
