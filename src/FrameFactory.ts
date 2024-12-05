import { Frames } from './Frames';
import { SingletonMap } from './SingletonMap';
import { ScreenKey, Utils } from './Utils';

class _FrameFactory extends SingletonMap<ScreenKey, Frames> {
  constructor() {
    super();
  }

  protected initMapValue(key: ScreenKey): Frames {
    const { width, height, gap } = Utils.getScreenInfoByScreenKey(key);
    return new Frames(width, height, gap);
  }

  public getFrame(idx: number, size: number, key: ScreenKey): Rectangle {
    return this._getMapValue(key).getFrameByIdx(idx, size);
  }

  public getFrames(size: number, key: ScreenKey): Rectangle[] {
    return this._getMapValue(key).getFrames(size);
  }
}

export class FrameFactory {
  static #instance: _FrameFactory;

  private static get instance(): _FrameFactory {
    if (!FrameFactory.#instance) {
      FrameFactory.#instance = new _FrameFactory();
    }

    return FrameFactory.instance;
  }

  public static getFrame(idx: number, size: number, key: ScreenKey): Rectangle {
    return FrameFactory.instance.getFrame(idx, size, key);
  }

  public static getFrames(size: number, key: ScreenKey): Rectangle[] {
    return FrameFactory.instance.getFrames(size, key);
  }
}
