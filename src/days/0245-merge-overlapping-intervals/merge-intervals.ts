import { partition } from "../shared/partition";

type Interval = [number, number];

const isOverlapping = (interval1: Interval, interval2: Interval): boolean =>
  interval2[0] < interval1[0]
    ? interval2[1] >= interval1[0]
    : interval2[0] <= interval1[1];

export function mergeIntervals(intervals: Array<Interval>): Array<Interval> {
  let result: Array<Interval> = [];
  let intervalsToCheck = [...intervals];
  while (intervalsToCheck.length > 0) {
    const interval = intervalsToCheck.shift()!;
    const [overlapping, notOverlapping] = partition(intervalsToCheck, (int) =>
      isOverlapping(interval, int),
    );
    if (overlapping.length === 0) {
      result.push(interval);
      continue;
    }
    // make sure we check our newly created overlapping interval with the others
    intervalsToCheck = [
      [
        [interval, ...overlapping].reduce(
          (acc, i) => Math.min(i[0], acc),
          Number.MAX_SAFE_INTEGER,
        ),
        [interval, ...overlapping].reduce(
          (acc, i) => Math.max(i[1], acc),
          Number.MIN_SAFE_INTEGER,
        ),
      ],
      ...notOverlapping,
    ];
  }
  return result;
}
