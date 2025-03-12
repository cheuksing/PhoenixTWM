import { FrameFactory } from './FrameFactory';
import { Order } from './Order';
import { OrderBuilder } from './OrderBuilder';
import { Utils } from './Utils';

export default class PhoenixTWM {
  // static #getHoveredWindow(): Window | undefined {
  //   return Window.at(Mouse.location());
  // }

  static #updateFrames(order: Order, screen: Screen) {
    const size = order.size;

    order.toArray().forEach((window, idx) => {
      const [key, opts] = Utils.getScreenOptions(screen);
      const frame = FrameFactory.getFrame(idx, size, key);
      window.setFrame(Utils.offsetRect(frame, opts.x, opts.y));
    });
  }

  public static setGap = Utils.setGap;
  public static setActiveBorderColor = Utils.setActiveBorderColor;
  public static setInactiveBorderColor = Utils.setInactiveBorderColor;
  public static setBorderWidth = Utils.setBorderWidth;

  public static refreshCurrentScreenLayout() {
    const screen = Screen.main();
    const order = OrderBuilder.buildOrder(screen);
    PhoenixTWM.#updateFrames(order, screen);
  }

  public static moveFocusedWindowForward() {
    const window = Window.focused();
    if (!window) return;
    let order = OrderBuilder.buildOrder(window.screen());
    order = OrderBuilder.moveForward(order, window);
    PhoenixTWM.#updateFrames(order, window.screen());
  }

  public static moveFocusedWindowBackward() {
    const window = Window.focused();
    if (!window) return;
    let order = OrderBuilder.buildOrder(window.screen());
    order = OrderBuilder.moveBackward(order, window);
    PhoenixTWM.#updateFrames(order, window.screen());
  }

  public static enableJankyBorders(
    installedPath: string = '/opt/homebrew/bin/borders',
    killallPath: string = '/usr/bin/killall'
  ) {
    Task.run(killallPath, ['borders'], () => {
      Task.run(installedPath, [
        `active_color=${Utils.activeBorderColor}`,
        `inactive_color=${Utils.inactiveBorderColor}`,
        `width=${Utils.borderWidth}.0`,
      ]);
    });
  }
}
