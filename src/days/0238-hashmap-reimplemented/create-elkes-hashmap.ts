export function createElkesHashmap() {
  const data: Array<number> = [];

  const put = (key: number, value: number): void => {
    data[key] = value;
  };

  const get = (key: number): number => {
    return data[key] ?? -1;
  };

  const remove = (key: number): void => {
    delete data[key];
  };

  return {
    put,
    get,
    remove,
  };
}
