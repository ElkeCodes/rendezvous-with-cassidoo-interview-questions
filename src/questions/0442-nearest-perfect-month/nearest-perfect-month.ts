export function nearestPerfectMonths(year: number): {
  prev: string;
  next: string;
} {
  const isPerfectFebruary = (year: number) => {
    const daysInFebruary = new Date(year, 2, 0).getDate();
    if (daysInFebruary !== 28) {
      return false;
    }
    const firstDayOfFebruary = new Date(year, 1, 1).getDay();
    return firstDayOfFebruary === 0 || firstDayOfFebruary === 1;
  };

  let prevYear = year;
  let nextYear = year + 1;

  while (!isPerfectFebruary(prevYear)) {
    prevYear--;
  }

  while (!isPerfectFebruary(nextYear)) {
    nextYear++;
  }

  return {
    prev: `${prevYear}-02`,
    next: `${nextYear}-02`,
  };
}
