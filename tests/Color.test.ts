import Color from '../src/index';

describe('Test Color utility', () => {
  describe('Can store values', () => {
    const color = new Color();
    it('Can set rgb value with no alpha set', () => {
      const rgbColors = [
        [255, 255, 255],
        [100, 155, 234],
        [0, 0, 0],
        [90, 160, 270],
      ];
      rgbColors.forEach(values => {
        const [r, g, b] = values;
        color.setRGB(r, g, b);
        expect(color.red).toBe(values[0]);
        expect(color.green).toBe(values[1]);
        expect(color.blue).toBe(values[2]);
        expect(color.rgb).toEqual(values);
        expect(color.alpha).toBe(1);
      });
    });
    it('Can set hex value with no alpha set', () => {
      const hexColors = ['#ff00bb', '#ccc', '#ababab', 'abcabc'];
      hexColors.forEach(value => {
        color.setHex(value);
        expect(color.hex).toBe(value);
      });
    });
    // it('Can set hsl value with no alpha set', () => {
    //   const hslColors = [
    //     [360, 100, 100],
    //     [120, 50, 50],
    //     [20, 25, 25],
    //   ];
    //   hslColors.forEach(value => {
    //     color.setHSL(...value);
    //     expect(color.hue).toBe(value[0]);
    //     expect(color.saturation).toBe(value[1]);
    //     expect(color.lightness).toBe(value[2]);
    //   });
    // });
  });
});
