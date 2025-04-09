export class ElkesHashMap {
  private data: Array<number>;

  constructor() {
    this.data = [];
  }

  public put(key: number, value: number): void {
    this.data[key] = value;
  }

  public get(key: number): number {
    return this.data[key] ?? -1;
  }

  public remove(key: number): void {
    delete this.data[key];
  }
}