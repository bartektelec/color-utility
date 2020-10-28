export default function rgbToHsl(r: number, g: number, b: number) {
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;

  const maxColor = Math.max(r1, g1, b1);
  const minColor = Math.min(r1, g1, b1);
  //Calculate L:
  const L = Math.round(((maxColor + minColor) / 2) * 100);
  let S = 0;
  let H = 0;
  if (maxColor != minColor) {
    //Calculate S:
    if (L < 50) {
      S = (maxColor - minColor) / (maxColor + minColor);
    } else {
      S = (maxColor - minColor) / (2.0 - maxColor - minColor);
    }
    //Calculate H:
    if (r1 == maxColor) {
      H = (g1 - b1) / (maxColor - minColor);
    } else if (g1 == maxColor) {
      H = 2.0 + (b1 - r1) / (maxColor - minColor);
    } else {
      H = 4.0 + (r1 - g1) / (maxColor - minColor);
    }
  }

  S = Math.round(S * 100);
  H = Math.round(H * 60);
  if (H < 0) {
    H += 360;
  }
  return { hue: H, saturation: S, lightness: L };
}
