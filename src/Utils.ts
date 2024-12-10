export type ScreenKey = `${number}-${number}-${number}`;
export type ScreenOptions = {
  x: number;
  y: number;
};

export class Utils {
  static gap = 4;

  static getScreenOptions(screen: Phoenix.Screen): [ScreenKey, ScreenOptions] {
    const { x, y, width, height } = screen.flippedVisibleFrame();
    return [`${width}-${height}-${Utils.gap}`, { x, y }];
  }

  static getScreenInfoByScreenKey(key: ScreenKey): {
    width: number;
    height: number;
    gap: number;
  } {
    const [width, height, gap] = key.split('-').map(Number);
    return { width, height, gap };
  }

  static setGap(gap: number): void {
    Utils.gap = gap;
  }

  static offsetRect(rect: Rectangle, x: number, y: number): Rectangle {
    return {
      x: rect.x + x,
      y: rect.y + y,
      width: rect.width,
      height: rect.height,
    };
  }
}
