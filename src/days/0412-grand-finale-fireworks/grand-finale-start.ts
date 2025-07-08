type Firework = { height: number; size: number; velocity: number };

export function grandFinaleStart(fireworks: Array<Firework>): number {
  let minHeight = Number.MAX_SAFE_INTEGER;
  let maxHeight = Number.MIN_SAFE_INTEGER;
  let previousFireworks: Array<Firework> = [];
  let endFound = false;
  for (let index = fireworks.length - 1; index >= 0; index--) {
    const firework = fireworks[index];
    if (firework.velocity < 3) {
      if (endFound) {
        return index + 1;
      }
      endFound = true;
    }
    const newCollection = [...previousFireworks, firework];
    const newAverages =
      newCollection.reduce(
        (total: number, current: Firework) => total + current.size,
        0,
      ) /
      (previousFireworks.length + 1);
    if (newAverages < 5) {
      if (endFound) {
        return index + 1;
      }
      endFound = true;
    }
    minHeight = Math.min(minHeight, firework.height);
    maxHeight = Math.max(maxHeight, firework.height);
    if (maxHeight - minHeight > 10) {
      if (endFound) {
        return index + 1;
      }
      endFound = true;
    }
  }
  return 0;
}
