type Firework = { height: number; size: number; velocity: number };
type Candidate = { index: number; fireworks: Array<Firework> };

const getAllCandidates = (fireworks: Array<Firework>): Array<Candidate> => {
  let result: Array<Candidate> = [];
  let currentIndex = 0;
  fireworks.forEach((firework, index) => {
    if (firework.velocity >= 3) {
      const tempCandidate = result[currentIndex] || { index, fireworks: [] };
      result[currentIndex] = {
        ...tempCandidate,
        fireworks: [...tempCandidate.fireworks, firework],
      };
    } else {
      currentIndex++;
    }
  });
  return result;
};

const isValidCandidate = ({ fireworks }: Candidate): boolean => {
  let minHeight = Number.MAX_SAFE_INTEGER;
  let maxHeight = Number.MIN_SAFE_INTEGER;
  let totalSize = 0;
  fireworks.forEach(({ height, size }) => {
    minHeight = Math.min(minHeight, height);
    maxHeight = Math.max(maxHeight, height);
    totalSize += size;
  });
  return maxHeight - minHeight <= 10 && totalSize / fireworks.length >= 5;
};

export function grandFinaleStart(fireworks: Array<Firework>): number {
  return (
    getAllCandidates(fireworks)
      .filter(isValidCandidate)
      .sort(
        (
          { fireworks: fireworksA, index: indexA },
          { fireworks: fireworksB, index: indexB },
        ) => {
          if (fireworksA.length === fireworksB.length) {
            return indexB - indexA;
          }
          return fireworksB.length - fireworksA.length;
        },
      )
      .at(0)?.index || -1
  );
}
