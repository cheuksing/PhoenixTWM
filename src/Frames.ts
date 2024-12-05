import { SingletonMap } from './SingletonMap';

export class Frames extends SingletonMap<number, Rectangle[]> {
  private readonly gap: number;
  private readonly width: number;
  private readonly height: number;

  constructor(width: number, height: number, gap: number) {
    super();
    this.width = width;
    this.height = height;
    this.gap = gap;
  }

  private createFrames(size: number): Rectangle[] {
    let x = 0;
    let y = 0;
    let w = this.width;
    let h = this.height;
    const g = this.gap;

    const result: Rectangle[] = [];

    for (let i = 0; i < size; i++) {
      const isEven = i % 2 === 0;

      if (isEven) {
        if (i + 1 < size) w /= 2;
      } else {
        if (i + 1 < size) h /= 2;
      }

      result.push({
        x: x + g,
        y: y + g,
        width: w - g * 2,
        height: h - g * 2,
      });

      if (isEven) {
        x += w;
      } else {
        y += h;
      }
    }

    return result;
  }

  protected initMapValue(size: number): Rectangle[] {
    if (size === 1) {
      return [
        {
          x: 0,
          y: 0,
          width: this.width,
          height: this.height,
        },
      ];
    } else {
      return this.createFrames(size);
    }
  }

  public getFrameByIdx(idx: number, size: number): Rectangle {
    return this._getMapValue(size)[idx];
  }

  public getFrames(size: number): Rectangle[] {
    const result: Rectangle[] = [];

    for (let i = 0; i < size; i++) {
      result.push(this._getMapValue(size)[i]);
    }

    return result;
  }
}
