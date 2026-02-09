export function canFormHexagon(sides: Array<number>): boolean {
  if (sides.length !== 6) {
    return false;
  }
  while (sides.length > 0) {
    const side = sides.shift()!;
    let otherSide = sides.indexOf(side);
    if (otherSide >= 0) {
      sides.splice(otherSide, 1);
    } else {
      return false;
    }
  }
  return true;
}
