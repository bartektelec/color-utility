export interface HexResult {
  full: string;
  alphaFull: string;
  plain: string;
  alphaPlain: string;
  red: string;
  green: string;
  blue: string;
  alpha: string;
}

export interface RgbObject {
  red: number;
  green: number;
  blue: number;
  alpha?: number;
}

export default function rgb2Hex({
  red,
  green,
  blue,
  alpha = 255,
}: RgbObject): HexResult {
  if (red > 255 || green > 255 || blue > 255 || (alpha && alpha > 255)) {
    throw new Error('RGB(a) values cannot be higher than 255');
  }
  const redHex = red.toString(16);
  const greenHex = green.toString(16);
  const blueHex = blue.toString(16);
  const alphaHex = alpha.toString(16);
  return {
    full: `#${redHex}${greenHex}${blueHex}`,
    alphaFull: `#${redHex}${greenHex}${blueHex}${alphaHex}`,
    plain: `${redHex}${greenHex}${blueHex}`,
    alphaPlain: `${redHex}${greenHex}${blueHex}${alphaHex}`,
    red: redHex,
    green: greenHex,
    blue: blueHex,
    alpha: alphaHex,
  };
}
