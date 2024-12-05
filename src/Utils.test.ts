import { describe, it, expect } from 'vitest';
import { Utils, ScreenKey } from './Utils';

describe('Utils', () => {
  it('should create a screen key', () => {
    const screen = {
      visibleFrame: () => ({ width: 1920, height: 1080 }),
    } as Phoenix.Screen;
    const key: ScreenKey = Utils.createScreenKey(screen);
    expect(key).toBe('1920-1080-4');
  });

  it('should get screen info by screen key', () => {
    const key: ScreenKey = '1920-1080-4';
    const info = Utils.getScreenInfoByScreenKey(key);
    expect(info).toEqual({ width: 1920, height: 1080, gap: 4 });
  });

  it('should set gap', () => {
    Utils.setGap(10);
    expect(Utils.gap).toBe(10);
  });

  it('should create a screen key with updated gap', () => {
    Utils.setGap(10);
    const screen = {
      visibleFrame: () => ({ width: 1920, height: 1080 }),
    } as Phoenix.Screen;
    const key: ScreenKey = Utils.createScreenKey(screen);
    expect(key).toBe('1920-1080-10');
  });
});
