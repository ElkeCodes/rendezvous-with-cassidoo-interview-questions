interface Siren {
  start: number;
  end: number;
}

export function removeSirens(sirens: Array<Siren>): number {
  let result = 0;
  sirens
    .sort(({ end: endA }, { end: endB }) => endA - endB)
    .reduce((previousSiren: Siren | undefined, currentSiren: Siren) => {
      if (!previousSiren) {
        return currentSiren;
      }
      if (currentSiren.start < previousSiren.end) {
        result++;
        return previousSiren;
      }
      return currentSiren;
    }, undefined);
  return result;
}
