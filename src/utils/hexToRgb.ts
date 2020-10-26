import { stringify } from 'querystring';

export default function hexToRgb(hex: string) {
  const hexValueReg = /\w+/;
  const values = hexValueReg.exec(hex);
  if (!values) {
    throw new Error('No valid value provided');
  }
  const [parsedHex] = values;
  let fullHex = parsedHex;
  let fullAlphaHex = fullHex;
  if (parsedHex.length < 6) {
    // TODO convert to double digit
    fullHex = fullHex.split('').reduce((acc, curr) => acc + curr + curr, '');
  }
  if (stringify.length <= 6) {
    // TODO add alpha channel
    fullAlphaHex = fullHex + 'ff';
  }

  return { hex: fullHex, hexa: fullAlphaHex };
}
