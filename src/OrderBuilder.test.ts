import { describe, it, expect, vi } from 'vitest';
import { OrderBuilder } from './OrderBuilder';
import { Order } from './Order';
import { FrameFactory } from './FrameFactory';
import { Utils } from './Utils';

describe('OrderBuilder', () => {
  it('should build an order with the correct window arrangement', () => {
    const screen = {
      currentSpace: vi.fn().mockReturnValue({
        windows: vi.fn().mockReturnValue([
          {
            hash: vi.fn().mockReturnValue(0),
            frame: vi
              .fn()
              .mockReturnValue({ x: 0, y: 0, width: 100, height: 100 }),
            isNormal: vi.fn().mockReturnValue(true),
            isMinimized: vi.fn().mockReturnValue(false),
          },
          {
            hash: vi.fn().mockReturnValue(1),
            frame: vi
              .fn()
              .mockReturnValue({ x: 100, y: 100, width: 100, height: 100 }),
            isNormal: vi.fn().mockReturnValue(true),
            isMinimized: vi.fn().mockReturnValue(false),
          },
          {
            hash: vi.fn().mockReturnValue(2),
            frame: vi
              .fn()
              .mockReturnValue({ x: 100, y: 0, width: 100, height: 100 }),
            isNormal: vi.fn().mockReturnValue(true),
            isMinimized: vi.fn().mockReturnValue(false),
          },
        ]),
      }),
      visibleFrame: vi.fn().mockReturnValue({ width: 200, height: 200 }),
    };

    const frames = [
      { x: 0, y: 0, width: 100, height: 200 },
      { x: 100, y: 0, width: 100, height: 100 },
      { x: 100, y: 100, width: 100, height: 100 },
    ];

    vi.spyOn(FrameFactory, 'getFrames').mockReturnValue(frames);
    vi.spyOn(Utils, 'getScreenOptions').mockReturnValue([
      '100-100-4',
      { x: 0, y: 0 },
    ]);

    const order = OrderBuilder.buildOrder(screen as unknown as Phoenix.Screen);

    expect(order.get(0)?.hash()).toEqual(
      screen.currentSpace().windows()[0].hash()
    );
    expect(order.get(1)?.hash()).toEqual(
      screen.currentSpace().windows()[2].hash()
    );
    expect(order.get(2)?.hash()).toEqual(
      screen.currentSpace().windows()[1].hash()
    );
  });

  it('should move a window backward in the order', () => {
    const order = new Order();
    const window1 = {
      hash: vi.fn().mockReturnValue(1),
    } as unknown as Window;
    const window2 = {
      hash: vi.fn().mockReturnValue(2),
    } as unknown as Window;

    order.set(0, window1);
    order.set(1, window2);

    const newOrder = OrderBuilder.moveBackward(order, window1);

    expect(newOrder.get(0)).toEqual(window2);
    expect(newOrder.get(1)).toEqual(window1);
  });

  it('should move a window forward in the order', () => {
    const order = new Order();
    const window1 = {
      hash: vi.fn().mockReturnValue(1),
    } as unknown as Window;
    const window2 = {
      hash: vi.fn().mockReturnValue(2),
    } as unknown as Window;

    order.set(0, window1);
    order.set(1, window2);

    const newOrder = OrderBuilder.moveForward(order, window2);

    expect(newOrder.get(0)).toEqual(window2);
    expect(newOrder.get(1)).toEqual(window1);
  });
});
