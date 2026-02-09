export function findLongestStreak(data: Array<boolean>, goal: number): number {
  let max = 0,
    current = 0;
  data.forEach((truthyValue) => {
    current = truthyValue ? current + 1 : 0;
    max = Math.max(max, current);
  }, 0);
  return max >= goal ? max : 0;
}
