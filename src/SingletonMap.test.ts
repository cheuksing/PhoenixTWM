/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, test, describe, beforeEach } from 'vitest';
import { SingletonMap } from './SingletonMap';

class TestSingletonMap extends SingletonMap<string, number> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - unused parameter is required for testing
  protected initMapValue(key: string): number {
    return 0;
  }

  public getMapValue(key: string): number {
    return this._getMapValue(key);
  }

  public setMapValue(key: string, value: number): void {
    this._setMapValue(key, value);
  }

  public hasMapValue(key: string): boolean {
    return this._hasMapValue(key);
  }

  public getMapKeys(): string[] {
    return this._getMapKeys();
  }
}

describe('SingletonMap', () => {
  let map: TestSingletonMap;

  beforeEach(() => {
    map = new TestSingletonMap();
  });

  test('getMapValue should return initialized value if key does not exist', () => {
    expect(map.getMapValue('key1')).toBe(0);
  });

  test('setMapValue should set the value for a key', () => {
    map.setMapValue('key1', 42);
    expect(map.getMapValue('key1')).toBe(42);
  });

  test('hasMapValue should return true if the key exists', () => {
    map.setMapValue('key1', 42);
    expect(map.hasMapValue('key1')).toBe(true);
  });

  test('hasMapValue should return false if the key does not exist', () => {
    expect(map.hasMapValue('key1')).toBe(false);
  });

  test('getMapKeys should return all keys in the map', () => {
    map.setMapValue('key1', 42);
    map.setMapValue('key2', 43);
    expect(map.getMapKeys()).toEqual(['key1', 'key2']);
  });
});
