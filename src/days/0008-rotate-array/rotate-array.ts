export function rotateArray(
  arr: Array<number>,
  rotationAmount: number,
): Array<number> {
  if (rotationAmount === 0) {
    return arr;
  }
  return rotateArray([arr.pop()!, ...arr], rotationAmount - 1);
}
