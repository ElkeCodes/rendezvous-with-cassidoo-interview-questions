export const partition = <T>(
  arr: Array<T>,
  fn: (value: T) => boolean
): [Array<T>, Array<T>] =>
  arr.reduce(
    (acc, val) => {
      acc[fn(val) ? 0 : 1].push(val);
      return acc;
    },
    [[] as Array<T>, [] as Array<T>]
  );
