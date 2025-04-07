export function longestSubsequence(input: Array<number>): number {
  let maxSequenceLength = 0;
  let currentSequenceLength = 0;
  let previous: null | number = null;
  let direction: 1 | 0 | -1 = 0;
  input.forEach((current) => {
    if (previous) {
      if (current - previous === direction) {
        currentSequenceLength++;
      } else {
        maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength);
        currentSequenceLength = 2; // because we have to account for the previous and the current
        direction = current - previous;
      }
    }
    previous = current;
  })

  return Math.max(maxSequenceLength, currentSequenceLength);
}
