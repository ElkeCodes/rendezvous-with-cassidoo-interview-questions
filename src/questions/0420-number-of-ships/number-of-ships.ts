type Coordinate = [number, number];
type SerializedCordinate = `${number},${number}`;
const serializeCoordinate = ([x, y]: Coordinate): SerializedCordinate =>
  `${x},${y}`;

export function numberOfShips(map: Array<Array<string>>): number {
  let visited: Set<SerializedCordinate> = new Set();
  let toVisit = [[0, 0]];
  let shipsFound = 0;

  const hasVisited = ([x, y]: Coordinate): boolean =>
    visited.has(serializeCoordinate([x, y]));
  const isValidCoordinate = ([x, y]: Coordinate): boolean => !!map[y]?.[x];
  const addToVisitCoordinate = ([x, y]: Coordinate): void => {
    isValidCoordinate([x, y]) && !hasVisited([x, y]) && toVisit.push([x, y]);
  };
  const addVisitedCoordinate = ([x, y]: Coordinate): void => {
    visited.add(serializeCoordinate([x, y]));
  };

  while (toVisit.length > 0) {
    const [x, y] = toVisit.shift()!;
    if (map[y][x] === "X") {
      shipsFound++;
      let testY = y;
      do {
        addVisitedCoordinate([x, testY]);
      } while (map[++testY][x] === "X");
      let testX = x;
      do {
        addVisitedCoordinate([testX, y]);
      } while (map[y][++testX] === "X");
    }
    addToVisitCoordinate([x + 1, y]);
    addToVisitCoordinate([x, y + 1]);
  }
  return shipsFound;
}
