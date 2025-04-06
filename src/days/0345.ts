type Island = Array<Array<number>>;

interface Coordinate {
  x: number;
  y: number;
  isIsland: boolean;
}

export const getSurroundingCoordinates = (
  coordinate: Pick<Coordinate, "x" | "y">,
  max_x: number,
  max_y: number,
) => [
  ...(coordinate.x > 0 ? [{ x: coordinate.x - 1, y: coordinate.y }] : []),
  ...(coordinate.x < max_x ? [{ x: coordinate.x + 1, y: coordinate.y }] : []),
  ...(coordinate.y > 0 ? [{ x: coordinate.x, y: coordinate.y - 1 }] : []),
  ...(coordinate.y < max_y ? [{ x: coordinate.x, y: coordinate.y + 1 }] : []),
];

export function largestIsland(input: Island): number {
  const data = new Map(
    input
      .map((row, y) =>
        row.map((island, x) => ({ x, y, isIsland: island === 1 })),
      )
      .flat()
      .map(({ x, y, isIsland }) => [JSON.stringify({ x, y }), isIsland]),
  );
  const maxX = input[0].length - 1;
  const maxY = input.length - 1;
  let maxSize = 0;
  for (let [coordinate, isIsland] of data) {
    if (isIsland) {
      let size = 0;
      let toVisit = [coordinate];
      let visited = new Set<string>();
      while (toVisit.length > 0) {
        let current = toVisit.pop()!;
        visited.add(current);
        if (data.get(current)) {
          size++;
          getSurroundingCoordinates(JSON.parse(current), maxX, maxY)
            .filter(
              ({ x: newX, y: newY }) =>
                !visited.has(JSON.stringify({ x: newX, y: newY })) &&
                !toVisit.find(
                  (old) => old === JSON.stringify({ x: newX, y: newY }),
                ),
            )
            .forEach((next) => toVisit.push(JSON.stringify(next)));
        }
      }
      maxSize = Math.max(maxSize, size);
    }
  }
  return maxSize;
}
