/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect, test, describe, beforeEach, vi } from 'vitest';
import { FrameFactory } from './FrameFactory';
import { ScreenKey, Utils } from './Utils';
import { Frames } from './Frames';

function createRectangle(
  x: number,
  y: number,
  width: number,
  height: number
): Rectangle {
  return { x, y, width, height };
}

describe('FrameFactory', () => {
  let screenKey: ScreenKey;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - unused parameter is required for testing
  let frameFactory: FrameFactory;

  beforeEach(() => {
    screenKey = '100-100-4';
    frameFactory = new FrameFactory();
    Utils.getScreenInfoByScreenKey = vi
      .fn()
      .mockReturnValue({ width: 1920, height: 1080, gap: 10 });
    Frames.prototype.getFrameByIdx = vi
      .fn()
      .mockReturnValue(createRectangle(0, 0, 100, 100));
    Frames.prototype.getFrames = vi
      .fn()
      .mockReturnValue([
        createRectangle(0, 0, 100, 100),
        createRectangle(100, 0, 100, 100),
      ]);
  });

  test('getFrame should return a frame by index', () => {
    const frame = FrameFactory.getFrame(0, 2, screenKey);
    expect(frame).toEqual(createRectangle(0, 0, 100, 100));
    expect(Frames.prototype.getFrameByIdx).toHaveBeenCalledWith(0, 2);
  });

  test('getFrames should return an array of frames', () => {
    const frames = FrameFactory.getFrames(2, screenKey);
    expect(frames).toEqual([
      createRectangle(0, 0, 100, 100),
      createRectangle(100, 0, 100, 100),
    ]);
    expect(Frames.prototype.getFrames).toHaveBeenCalledWith(2);
  });
});
