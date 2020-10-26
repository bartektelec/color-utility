export default function rgbToHex(
  red: number,
  green: number,
  blue: number,
  alpha: number
) {
  const hex = [red, green, blue].reduce(
    (acc, curr) => acc + curr.toString(16),
    ''
  );
  const aHex = (alpha * 255).toString(16) || 'ff';

  return {
    hex,
    hexa: hex + aHex,
  };
}
