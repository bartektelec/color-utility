export default function hexToRgb(hex: string) {
  const splittedHex = hex.match(/\w{2}/g);
  if (!splittedHex) {
    throw new Error('No valid value read');
  }
  const [r, g, b, a] = splittedHex;
  const red = parseInt(r, 16);
  const green = parseInt(g, 16);
  const blue = parseInt(b, 16);
  const alpha = parseInt(a, 16) / 255;

  return {
    red,
    green,
    blue,
    alpha,
  };
}
