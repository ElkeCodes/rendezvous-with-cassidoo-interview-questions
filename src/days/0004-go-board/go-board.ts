export type Stone = "B" | "W" | ".";
export type Coordinate = [number, number];

export interface GoBoard {
  size: number;
  grid: Array<Array<Stone>>;
}

type SerializedCoordinate = `${number},${number}`;
const serializeCoordinate = ([x, y]: Coordinate): SerializedCoordinate =>
  `${x},${y}`;

export const createBoard = (size: number): GoBoard => {
  if (!Number.isInteger(size) || size <= 0) {
    throw new Error("Board size must be a positive integer.");
  }
  return {
    size,
    grid: Array.from({ length: size }, () => Array<Stone>(size).fill(".")),
  };
};

const inBounds = (board: GoBoard, [x, y]: Coordinate): boolean =>
  x >= 0 && y >= 0 && x < board.size && y < board.size;

const getNeighbors = ([x, y]: Coordinate): Array<Coordinate> => [
  [x - 1, y],
  [x + 1, y],
  [x, y - 1],
  [x, y + 1],
];

const cloneBoard = (board: GoBoard): GoBoard => ({
  size: board.size,
  grid: board.grid.map((row) => [...row]),
});

const findGroup = (
  board: GoBoard,
  start: Coordinate,
): { group: Array<Coordinate>; liberties: Set<SerializedCoordinate> } => {
  const color = board.grid[start[1]][start[0]];
  const visited = new Set<SerializedCoordinate>();
  const liberties = new Set<SerializedCoordinate>();
  const group: Array<Coordinate> = [];
  const toVisit: Array<Coordinate> = [start];

  while (toVisit.length > 0) {
    const current = toVisit.pop()!;
    const key = serializeCoordinate(current);
    if (visited.has(key)) {
      continue;
    }
    visited.add(key);
    group.push(current);

    for (const neighbor of getNeighbors(current)) {
      if (!inBounds(board, neighbor)) {
        continue;
      }
      const [nx, ny] = neighbor;
      const cell = board.grid[ny][nx];
      if (cell === ".") {
        liberties.add(serializeCoordinate(neighbor));
      } else if (cell === color) {
        const neighborKey = serializeCoordinate(neighbor);
        if (!visited.has(neighborKey)) {
          toVisit.push(neighbor);
        }
      }
    }
  }

  return { group, liberties };
};

export const captureTerritory = (
  board: GoBoard,
  color: Stone,
): { board: GoBoard; captured: Array<Coordinate> } => {
  if (color !== "B" && color !== "W") {
    throw new Error("Only black or white stones can be captured.");
  }

  const nextBoard = cloneBoard(board);
  const visited = new Set<SerializedCoordinate>();
  const captured: Array<Coordinate> = [];

  for (let y = 0; y < board.size; y++) {
    for (let x = 0; x < board.size; x++) {
      if (board.grid[y][x] !== color) {
        continue;
      }
      const start: Coordinate = [x, y];
      const key = serializeCoordinate(start);
      if (visited.has(key)) {
        continue;
      }
      const { group, liberties } = findGroup(board, start);
      for (const coord of group) {
        visited.add(serializeCoordinate(coord));
      }
      if (liberties.size === 0) {
        for (const [gx, gy] of group) {
          nextBoard.grid[gy][gx] = ".";
          captured.push([gx, gy]);
        }
      }
    }
  }

  return { board: nextBoard, captured };
};

export const placeStone = (
  board: GoBoard,
  coordinate: Coordinate,
  color: Stone,
): { board: GoBoard; captured: Array<Coordinate> } => {
  if (color !== "B" && color !== "W") {
    throw new Error("Only black or white stones can be placed.");
  }
  if (!inBounds(board, coordinate)) {
    throw new Error("Coordinate is out of bounds.");
  }
  const [x, y] = coordinate;
  if (board.grid[y][x] !== ".") {
    throw new Error("Cannot place a stone on an occupied point.");
  }

  const nextBoard = cloneBoard(board);
  nextBoard.grid[y][x] = color;

  const opponent: Stone = color === "B" ? "W" : "B";
  const captureResult = captureTerritory(nextBoard, opponent);
  const postCaptureBoard = captureResult.board;

  const { liberties } = findGroup(postCaptureBoard, coordinate);
  if (liberties.size === 0) {
    throw new Error("Illegal move: self-capture.");
  }

  return { board: postCaptureBoard, captured: captureResult.captured };
};
