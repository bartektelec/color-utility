import hexToRgb from './utils/hexToRgb';

export default class Color {
  private _red: number;
  private _green: number;
  private _blue: number;
  private _alpha: number;
  private _hue: number;
  private _saturation: number;
  private _lightness: number;
  private _brightness: number;
  private _hex: string;
  private _hexa: string;
  constructor() {}

  // getters
  public get red() {
    return this._red;
  }
  public get green() {
    return this._green;
  }
  public get blue() {
    return this._blue;
  }

  public get rgb() {
    return [this._red, this._green, this._blue];
  }

  public get hue() {
    return this._hue;
  }
  public get saturation() {
    return this._saturation;
  }
  public get lightness() {
    return this._lightness;
  }
  public get brightness() {
    return this._brightness;
  }
  public get alpha() {
    return this._alpha;
  }
  public get hslString() {
    return `hsl(${this._hue},${this._saturation},${this._lightness})`;
  }
  public get hsl() {
    return {
      hue: this._hue,
      saturation: this._saturation,
      lightness: this._lightness,
    };
  }
  public get hexString() {
    return `#${this._hex}`;
  }
  public get hex() {
    return this._hex;
  }
  public get hexaString() {
    return `#${this._hexa}`;
  }
  public get hexa() {
    return this._hexa;
  }

  public setRGB(r: number, g: number, b: number, a: number = 1) {
    this._red = r;
    this._green = g;
    this._blue = b;
    this._alpha = a;
    return this;
  }

  public setHex(hexInput: string) {
    const { hex, hexa } = hexToRgb(hexInput);
    this._hex = hex;
    this._hexa = hexa;
  }

  public setHSL() {
    // TODO
  }

  public setHSB() {
    // TODO
  }
}
