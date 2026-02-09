type NestedArray = Array<NestedArray | number>;

export function nestArray(data: Array<number>): NestedArray {
  if (data.length <= 1) {
    return data;
  }
  const [first, ...rest] = data;
  return [first, nestArray(rest)];
}
