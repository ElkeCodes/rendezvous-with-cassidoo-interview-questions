type Coordinate = [number, number];

const getSurroundingCoordinates = (
  coordinate: Coordinate,
  max_x: number,
  max_y: number,
) =>
  [
    { x: coordinate[0] - 1, y: coordinate[1] - 1 },
    { x: coordinate[0], y: coordinate[1] - 1 },
    { x: coordinate[0] + 1, y: coordinate[1] - 1 },
    { x: coordinate[0] - 1, y: coordinate[1] },
    { x: coordinate[0] + 1, y: coordinate[1] },
    { x: coordinate[0] - 1, y: coordinate[1] + 1 },
    { x: coordinate[0], y: coordinate[1] + 1 },
    { x: coordinate[0] + 1, y: coordinate[1] + 1 },
  ].filter(({ x, y }) => x >= 0 && x < max_x && y >= 0 && y < max_y);

const isMine = (mines: Array<Coordinate>, coordinate: Coordinate): boolean =>
  !!mines.find(
    ([cx, cy]) => cx - 1 === coordinate[0] && cy - 1 === coordinate[1],
  );

export function generateMinesweeper(
  gridSize: number,
  mines: Array<Coordinate>,
): void {
  let result: Array<string> = [];
  for (let j = 0; j < gridSize; j++) {
    result.push(
      Array.from({ length: gridSize }, (_, i) =>
        isMine(mines, [i, j])
          ? "*"
          : getSurroundingCoordinates([i, j], gridSize, gridSize).reduce(
              (acc, { x, y }) => acc + (isMine(mines, [x, y]) ? 1 : 0),
              0,
            ),
      )
        .map((x) => (x === 0 ? "x" : x))
        .join(""),
    );
  }
  result.forEach((line) => console.log(line));
}
