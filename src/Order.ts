export class Order {
  #orders: Map<number, Window>;

  constructor() {
    this.#orders = new Map();
  }

  public get size(): number {
    return this.#orders.size;
  }

  public get(idx: number): Window | undefined {
    return this.#orders.get(idx);
  }

  public set(idx: number, window: Window) {
    this.#orders.set(idx, window);
  }

  public has(idx: number): boolean {
    return this.#orders.has(idx);
  }

  public findIndex(window: Window): number {
    for (let i = 0; i < this.size; i++) {
      if (this.#orders.get(i)?.hash() === window?.hash()) {
        return i;
      }
    }
    return -1;
  }

  public toArray(): Window[] {
    const result: Window[] = [];
    for (let i = 0; i < this.size; i++) {
      result.push(this.#orders.get(i)!);
    }
    return result;
  }
}
