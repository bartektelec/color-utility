
export default function prettifyHex(hex: string) {
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
  if (fullHex.length <= 6) {
    // TODO add alpha channel
    fullAlphaHex = fullHex + 'ff';
  } else {
    const fullHexArr = fullHex.split("");
    const alphaHex = fullHexArr.splice(6,2);
    fullHex = fullHexArr.join("");
    fullAlphaHex = fullHex + alphaHex.join("");
  }

  return { hex: fullHex, hexa: fullAlphaHex};
}
