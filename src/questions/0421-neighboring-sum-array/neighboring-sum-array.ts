export function neighboringSumArray(data: Array<number>): number {
  const inner = (index: number): number => {
    if (data.length === index) {
      return 0;
    } else {
      return (
        data[index] +
        (data[index - 1] ?? 0) +
        (data[index + 1] ?? 0) +
        inner(index + 1)
      );
    }
  };
  return (inner(0) * 100) / 100; // trick to handle JS rounding errors
}
