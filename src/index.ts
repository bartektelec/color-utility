import prettifyHex from './utils/prettifyHex';
import hexToRgb from './utils/hexToRgb';
import rgbToHex from './utils/rgbToHex';
import rgbToHsl from './utils/rgbToHsl';

export { hexToRgb, rgbToHex };
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

  // SECTION Helper calculate and set one format

  private rgbToHsl() {
    const { hue, saturation, lightness } = rgbToHsl(
      this._red,
      this._green,
      this._blue
    );
    this._hue = hue;
    this._saturation = saturation;
    this._lightness = lightness;
  }

  private hexToRgb() {
    const { red, green, blue, alpha } = hexToRgb(this._hexa);
    this._red = red;
    this._green = green;
    this._blue = blue;
    this._alpha = alpha;
  }

  private rgbToHex() {
    const { hex, hexa } = rgbToHex(
      this._red,
      this._green,
      this._blue,
      this._alpha
    );
    this._hex = hex;
    this._hexa = hexa;
  }

  // SECTION Helper functions
  private convertRGB() {
    this.rgbToHex();
    this.rgbToHsl();
    // TODO calc hsb
  }

  private convertHex() {
    this.hexToRgb();
    this.rgbToHsl();
    // TODO calc hsb
  }

  private convertHSL() {
    // TODO calc to RGB
    // TODO calc Hex
    // TODO calc hsb
  }

  private convertHSB() {
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
  public get rgb() {
    return [this._red, this._green, this._blue];
  }

  public get rgbString() {
    return `rgb(${this._red}, ${this._green}, ${this._blue})`;
  }
  public get rgba() {
    return [this._red, this._green, this._blue, this._alpha];
  }

  public get rgbaString() {
    return `rgba(${this._red}, ${this._green}, ${this._blue}, ${this._alpha})`;
  }
  public get hsl() {
    return [this._hue, this._saturation, this._lightness];
  }
  public get hslString() {
    return `hsl(${this._hue}, ${this._saturation}, ${this._lightness})`;
  }
  public get hsla() {
    return [this._hue, this._saturation, this._lightness, this._alpha];
  }
  public get hslaString() {
    return `hsla(${this._hue}, ${this._saturation}, ${this._lightness}, ${this._alpha})`;
  }
  public get hsb() {
    return [this._hue, this._saturation, this._brightness];
  }
  public get hsbString() {
    return `hsb(${this._hue}, ${this._saturation}, ${this._brightness})`;
  }
  public get hsba() {
    return [this._hue, this._saturation, this._brightness, this._alpha];
  }
  public get hsbaString() {
    return `hsba(${this._hue}, ${this._saturation}, ${this._brightness}, ${this._alpha})`;
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
    this.convertRGB();
    return this;
  }

  public setHex(hexInput: string) {
    // FIXME validation
    const { hex, hexa } = prettifyHex(hexInput);
    this._hex = hex;
    this._hexa = hexa;
    this.convertHex();
    return this;
  }

  public setHSL(h: number, s: number, l: number, a: number = 1) {
    // FIXME validation
    this._hue = h;
    this._saturation = s;
    this._lightness = l;
    this._alpha = a;
    this.convertHSL();
    return this;
  }

  public setHSB(h: number, s: number, b: number, a: number = 1) {
    // FIXME validation
    this._hue = h;
    this._saturation = s;
    this._brightness = b;
    this._alpha = a;
    this.convertHSB();
    return this;
  }
}
