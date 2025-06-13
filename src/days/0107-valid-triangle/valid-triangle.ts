export function validTriangle(
  side1: number,
  side2: number,
  side3: number,
): boolean {
  return (
    side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
  );
}
