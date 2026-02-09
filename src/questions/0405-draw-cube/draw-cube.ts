const fill = (character: string, length: number): string =>
  Array.from({ length }, () => character).join("");

export function calculateCubePixels(n: number): Array<string> {
  const result: Array<string> = [];
  const half = Math.floor(n / 2);
  // upper back border
  result.push(`${fill(" ", half + 1)}+${fill("-", n * 2)}+`);

  for (let i = 0; i < half; i++) {
    result.push(`${fill(" ", half - i)}/${fill(" ", n * 2)}/${fill(" ", i)}|`);
  }

  // upper front border
  result.push(`+${fill("-", n * 2)}+${fill(" ", half)}|`);

  // cube sides
  for (let i = 0; i < half - 1; i++) {
    result.push(`|${fill(" ", n * 2)}|${fill(" ", half)}|`);
  }

  // cube sides with backright corner
  result.push(`|${fill(" ", n * 2)}|${fill(" ", half)}+`);

  // left diagonal side
  for (let i = 0; i < half; i++) {
    result.push(`|${fill(" ", n * 2)}|${fill(" ", half - i - 1)}/`);
  }

  // down front border
  result.push(`+${fill("-", n * 2)}+`);
  return result;
}

export function drawCube(n: number): void {
  calculateCubePixels(n).forEach((x) => console.log(x));
}
