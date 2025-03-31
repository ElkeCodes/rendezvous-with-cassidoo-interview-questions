type Timestamp = `${number}:${number}`;

const splitTimestamp = (timestamp: Timestamp): [number, number] => {
  const [hours, minutes] = timestamp.split(":");
  return [parseInt(hours, 10), parseInt(minutes, 10)];
};

const getTimeGap = (timestampA: Timestamp, timestampB: Timestamp): number => {
  const [hoursA, minutesA] = splitTimestamp(timestampA);
  const [hoursB, minutesB] = splitTimestamp(timestampB);
  return (hoursB - hoursA) * 60 + (minutesB - minutesA);
};

export function findLongestTimeGap(timeGaps: Array<Timestamp>): number {
  return timeGaps
    .sort((a, b) => b.localeCompare(a))
    .reduce(
      (maxTimeGap, currentTime, currentIndex) =>
        Math.max(
          maxTimeGap,
          getTimeGap(currentTime, timeGaps[Math.max(0, currentIndex - 1)]),
        ),
      0,
    );
}
