export function subarraySum(data: Array<number>, target: number): number {
  return data.filter((x, index) => {
    const searchData = data.slice(index);
    let total = 0;
    while (searchData.length > 0) {
      total += searchData.shift()!;
      if (total === target) {
        return true;
      }
    }
    return false;
  }).length;
}
