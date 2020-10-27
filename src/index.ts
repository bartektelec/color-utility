import prettifyHex from './utils/prettifyHex';
import hexToRgb from './utils/hexToRgb';
import rgbToHex from './utils/rgbToHex';

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

  // SECTION Constructor
  constructor() {
    // TODO make able to set value in constructor
  }

  // SECTION Helper functions
  private calcFromRGB() {
    // TODO calc hex
    const { hex, hexa } = rgbToHex(
      this._red,
      this._green,
      this._blue,
      this._alpha
    );
    this._hex = hex;
    this._hexa = hexa;
    // TODO calc hsl
    // TODO calc hsb
  }

  private calcFromHex() {
    // TODO calc RGB
    const { red, green, blue, alpha } = hexToRgb(this._hexa);
    this._red = red;
    this._green = green;
    this._blue = blue;
    this._alpha = alpha;
    // TODO calc hsl
    // TODO calc hsb
  }

  private calcFromHSL() {
    // TODO calc RGB
    // TODO calc Hex
    // TODO calc hsb
  }

  private calcFromHSB() {
    // TODO calc RGB
    // TODO calc Hex
    // TODO calc HSL
  }

  // SECTION Getter functions
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

  // SECTION Setter functions
  public setRGB(r: number, g: number, b: number, a: number = 1) {
    // FIXME validation?
    this._red = r;
    this._green = g;
    this._blue = b;
    this._alpha = a;
    this.calcFromRGB();
    return this;
  }

  public setHex(hexInput: string) {
    // FIXME validation
    const { hex, hexa } = prettifyHex(hexInput);
    this._hex = hex;
    this._hexa = hexa;
    this.calcFromHex();
    return this;
  }

  public setHSL(h: number, s: number, l: number, a: number = 1) {
    // FIXME validation
    this._hue = h;
    this._saturation = s;
    this._lightness = l;
    this._alpha = a;
    this.calcFromHSL();
    return this;
  }

  public setHSB(h: number, s: number, b: number, a: number = 1) {
    // FIXME validation
    this._hue = h;
    this._saturation = s;
    this._brightness = b;
    this._alpha = a;
    this.calcFromHSB();
    return this;
  }
}
