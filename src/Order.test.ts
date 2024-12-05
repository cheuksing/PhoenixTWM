import { expect, test, describe, beforeEach } from 'vitest';
import { Order } from './Order';

function createMockWindow(id: number) {
  return {
    hash: () => id,
  } as unknown as Window;
}

describe('Test Order', () => {
  let order: Order;
  let window1: Window;
  let window2: Window;

  beforeEach(() => {
    order = new Order();
    window1 = createMockWindow(1);
    window2 = createMockWindow(2);
  });

  test('should have initial size of 0', () => {
    expect(order.size).toBe(0);
  });

  test('should set and get windows', () => {
    order.set(0, window1);
    expect(order.get(0)).toBe(window1);
    expect(order.size).toBe(1);
  });

  test('should check if index exists', () => {
    order.set(1, window2);
    expect(order.has(1)).toBe(true);
    expect(order.has(2)).toBe(false);
  });

  test('should find index of a window', () => {
    order.set(0, window1);
    order.set(1, window2);
    expect(order.findIndex(window1)).toBe(0);
    expect(order.findIndex(window2)).toBe(1);
  });

  test('should return array of windows', () => {
    order.set(0, window1);
    order.set(1, window2);
    expect(order.toArray()).toEqual([window1, window2]);
  });
});
