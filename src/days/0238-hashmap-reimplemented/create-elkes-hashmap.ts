export function createElkesHashmap<
  TValue extends number | string | symbol | object,
  TKey extends number,
>() {
  const data: Array<TValue> = [];

  const put = (key: TKey, value: TValue): void => {
    data[key] = value;
  };

  const get = (key: TKey): TValue => {
    return data[key] ?? -1;
  };

  const remove = (key: TKey): void => {
    delete data[key];
  };

  return {
    put,
    get,
    remove,
  };
}
