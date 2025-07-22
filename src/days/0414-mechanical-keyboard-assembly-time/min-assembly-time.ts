export function minAssemblyTime(
  partsData: Array<{
    name: string;
    arrivalDays: number;
    assemblyHours: number;
  }>,
): number {
  let latestArrivalDay = 0;
  let assemblyHoursOnLatestArrivalDay = 0;
  partsData.forEach(({ arrivalDays, assemblyHours }) => {
    if (arrivalDays > latestArrivalDay) {
      assemblyHoursOnLatestArrivalDay = assemblyHours;
      latestArrivalDay = arrivalDays;
    } else if (arrivalDays === latestArrivalDay) {
      assemblyHoursOnLatestArrivalDay += assemblyHours;
    }
  });
  return latestArrivalDay * 24 + assemblyHoursOnLatestArrivalDay;
}
