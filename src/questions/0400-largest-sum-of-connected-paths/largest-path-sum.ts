type Grid = Array<Array<number>>;
type Coordinate = [number, number];

const serializeCoordinate = ([x, y]: Coordinate) => `${x},${y}`;

const getValidNeighbours = (
  grid: Grid,
  [x, y]: Coordinate,
  maxX: number,
  maxY: number,
): Array<Coordinate> => {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  return directions
    .filter(
      ([dx, dy]) =>
        x + dx >= 0 &&
        x + dx < maxX &&
        y + dy >= 0 &&
        y + dy < maxY &&
        grid[y + dy][x + dx] > 0,
    )
    .map(([dx, dy]) => [x + dx, y + dy]);
};

export function largestPathSum(grid: Grid) {
  if (!grid.length || !grid[0].length) return 0;

  const maxY = grid.length;
  const maxX = grid[0].length;
  let maxSum = -Infinity;

  function dfs([x, y]: Coordinate, currentSum: number, visited: Set<string>) {
    if (visited.has(serializeCoordinate([x, y]))) {
      return;
    }

    currentSum += grid[y][x];
    maxSum = Math.max(maxSum, currentSum);

    visited.add(serializeCoordinate([x, y]));
    getValidNeighbours(grid, [x, y], maxX, maxY).forEach(([newCol, newRow]) => {
      dfs([newCol, newRow], currentSum, new Set(visited));
    });
  }

  for (let i = 0; i < maxY; i++) {
    for (let j = 0; j < maxX; j++) {
      if (grid[i][j] > 0) {
        dfs([j, i], 0, new Set());
      }
    }
  }

  return maxSum === -Infinity ? 0 : maxSum;
}
