export function findLongestStreak(
  candidates: Array<boolean>,
  minLength: number,
): number {
  let maxStreak = 0;
  let currentStreak = 0;
  candidates.forEach((currentCandidate) => {
    if (currentCandidate) {
      currentStreak++;
    } else {
      maxStreak = Math.max(maxStreak, currentStreak);
      currentStreak = 0;
    }
  }, 0);
  maxStreak = Math.max(maxStreak, currentStreak);
  if (maxStreak >= minLength) {
    return maxStreak;
  }
  return 0;
}
