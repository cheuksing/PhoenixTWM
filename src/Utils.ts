export type ScreenKey = `${number}-${number}-${number}`;

export class Utils {
  static gap = 4;

  static createScreenKey(screen: Phoenix.Screen): ScreenKey {
    const { width, height } = screen.visibleFrame();
    return `${width}-${height}-${Utils.gap}`;
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
}
