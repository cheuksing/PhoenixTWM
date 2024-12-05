import { expect, test, describe } from 'vitest';
import { Frames } from './Frames';

describe('Test Frames with gap 4', () => {
  const gap = 4;

  test('Single frame', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(0, 1)).toEqual({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
  });

  test('1st frame of 2', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(0, 2)).toEqual({
      x: 4,
      y: 4,
      width: 42,
      height: 92,
    });
  });

  test('2nd frame of 2', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(1, 2)).toEqual({
      x: 54,
      y: 4,
      width: 42,
      height: 92,
    });
  });

  test('1st frame of 3', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(0, 3)).toEqual({
      x: 4,
      y: 4,
      width: 42,
      height: 92,
    });
  });

  test('2nd frame of 3', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(1, 3)).toEqual({
      x: 54,
      y: 4,
      width: 42,
      height: 42,
    });
  });

  test('3rd frame of 3', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(2, 3)).toEqual({
      x: 54,
      y: 54,
      width: 42,
      height: 42,
    });
  });

  test('1st frame of 4', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(0, 4)).toEqual({
      x: 4,
      y: 4,
      width: 42,
      height: 92,
    });
  });

  test('2nd frame of 4', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(1, 4)).toEqual({
      x: 54,
      y: 4,
      width: 42,
      height: 42,
    });
  });

  test('3rd frame of 4', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(2, 4)).toEqual({
      x: 54,
      y: 54,
      width: 17,
      height: 42,
    });
  });

  test('4th frame of 4', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(3, 4)).toEqual({
      x: 79,
      y: 54,
      width: 17,
      height: 42,
    });
  });

  test('1st frame of 5', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(0, 5)).toEqual({
      x: 4,
      y: 4,
      width: 42,
      height: 92,
    });
  });

  test('2nd frame of 5', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(1, 5)).toEqual({
      x: 54,
      y: 4,
      width: 42,
      height: 42,
    });
  });

  test('3rd frame of 5', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(2, 5)).toEqual({
      x: 54,
      y: 54,
      width: 17,
      height: 42,
    });
  });

  test('4th frame of 5', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(3, 5)).toEqual({
      x: 79,
      y: 54,
      width: 17,
      height: 17,
    });
  });

  test('5th frame of 5', () => {
    expect(new Frames(100, 100, gap).getFrameByIdx(4, 5)).toEqual({
      x: 79,
      y: 79,
      width: 17,
      height: 17,
    });
  });
});
