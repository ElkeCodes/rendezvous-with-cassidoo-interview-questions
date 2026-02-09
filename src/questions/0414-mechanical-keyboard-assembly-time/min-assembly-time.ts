interface PartData {
  name: string;
  arrivalDays: number;
  assemblyHours: number;
}

export function minAssemblyTime(partsData: Array<PartData>): number {
  let arrivalDaysAssemblyHours: Array<number> = [];
  const spreadAssemblyHours = ({
    arrivalDays,
    assemblyHours,
  }: Pick<PartData, "arrivalDays" | "assemblyHours">) => {
    const previouslyLoggedHours = arrivalDaysAssemblyHours[arrivalDays] ?? 0;
    if (previouslyLoggedHours + assemblyHours > 24) {
      arrivalDaysAssemblyHours[arrivalDays] = 24;
      spreadAssemblyHours({
        arrivalDays: arrivalDays + 1,
        assemblyHours: assemblyHours - 24 + previouslyLoggedHours,
      });
    } else {
      arrivalDaysAssemblyHours[arrivalDays] =
        previouslyLoggedHours + assemblyHours;
    }
  };
  partsData.forEach(spreadAssemblyHours);
  return (
    arrivalDaysAssemblyHours[arrivalDaysAssemblyHours.length - 1] +
    24 * (arrivalDaysAssemblyHours.length - 1)
  );
}
