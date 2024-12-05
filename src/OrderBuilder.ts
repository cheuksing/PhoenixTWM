import { FrameFactory } from './FrameFactory';
import { Order } from './Order';
import { Utils } from './Utils';

export class OrderBuilder {
  private static dist(x: Rectangle, y: Rectangle): number {
    return Math.hypot(x.x - y.x, x.y - y.y);
  }

  public static buildOrder(screen: Phoenix.Screen): Order {
    const space = screen.currentSpace()!;
    const windows = space
      .windows()
      .filter((w) => w.isNormal() && !w.isMinimized());

    const size = windows.length;

    const destFrames = FrameFactory.getFrames(
      size,
      Utils.createScreenKey(screen)
    );

    const order = new Order();

    for (let i = 0; i < size; i++) {
      const frame = windows[i].frame();
      let minDistance = Infinity;
      let minDestIndex = -1;

      for (let i = 0; i < destFrames.length; i++) {
        if (order.has(i)) continue;

        const distance = OrderBuilder.dist(frame, destFrames[i]);

        if (distance < minDistance) {
          minDistance = distance;
          minDestIndex = i;
        }
      }

      if (minDestIndex >= 0) {
        order.set(minDestIndex, windows[i]);
      }
    }

    return order;
  }

  public static moveBackward(order: Order, window: Window): Order {
    const idx = order.findIndex(window);

    if (idx === -1) {
      return order;
    }

    if (idx === order.size - 1) {
      return order;
    }

    const nextWindow = order.get(idx + 1);

    order.set(idx, nextWindow!);
    order.set(idx + 1, window);

    return order;
  }

  public static moveForward(order: Order, window: Window): Order {
    const idx = order.findIndex(window);

    if (idx === -1) {
      return order;
    }

    if (idx === 0) {
      return order;
    }

    const prevWindow = order.get(idx - 1);

    order.set(idx, prevWindow!);
    order.set(idx - 1, window);

    return order;
  }
}
