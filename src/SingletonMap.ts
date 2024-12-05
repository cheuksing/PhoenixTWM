export abstract class SingletonMap<K, V> {
  protected map: Map<K, V>;

  constructor() {
    this.map = new Map();
  }

  protected abstract initMapValue(key: K): V;

  protected _getMapValue(key: K): V {
    return this.map.get(key) ?? this.initMapValue(key);
  }

  protected _setMapValue(key: K, value: V): void {
    this.map.set(key, value);
  }

  protected _hasMapValue(key: K): boolean {
    return this.map.has(key);
  }

  protected _getMapKeys(): K[] {
    return [...this.map.keys()];
  }
}
