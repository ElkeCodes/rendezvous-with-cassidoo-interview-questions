export class ElkesHashMap<
  TValue extends number | string | symbol | object,
  TKey extends number,
> {
  private data: Array<TValue>;

  constructor() {
    this.data = [];
  }

  public put(key: TKey, value: TValue): void {
    this.data[key] = value;
  }

  public get(key: TKey): TValue {
    return this.data[key] ?? -1;
  }

  public remove(key: TKey): void {
    delete this.data[key];
  }
}
