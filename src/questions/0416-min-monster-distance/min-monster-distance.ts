export function minMonsterDistance(
  monsters: Array<number>,
  minDistance: number,
): number {
  const loop = (index: number, minDistanceFound: number): number => {
    if (index >= monsters.length - 1) {
      return minDistanceFound === Number.MAX_SAFE_INTEGER
        ? -1
        : minDistanceFound;
    } else {
      const monsterA = monsters[index];
      const monsterB = monsters[index + 1];
      if (monsterB - monsterA >= minDistance) {
        return loop(index + 1, minDistanceFound);
      } else {
        return loop(index + 1, Math.min(monsterB - monsterA, minDistanceFound));
      }
    }
  };
  return loop(0, Number.MAX_SAFE_INTEGER);
}
