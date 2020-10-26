import Color from '../src/index';

describe('Test Color utility', () => {
  describe('Can store values and retrieve them', () => {
    const color = new Color();
    it('Can set RGB value with no alpha set', () => {
      const rgbColors = [
        [255, 255, 255],
        [100, 155, 234],
        [0, 0, 0],
        [90, 160, 270],
      ];
      rgbColors.forEach(values => {
        const [r, g, b] = values;
        color.setRGB(r, g, b);
        expect(color.red).toEqual(values[0]);
        expect(color.green).toEqual(values[1]);
        expect(color.blue).toEqual(values[2]);
        expect(color.rgb).toEqual(values);
        expect(color.alpha).toEqual(1);
      });
    });
    it('Can set HEX value with no alpha set', () => {
      const hexColors = {
        '#ff00bb': 'ff00bb',
        '#ccc': 'cccccc',
        '#ababab': 'ababab',
        abcabc: 'abcabc',
      };
      Object.keys(hexColors).forEach(key => {
        color.setHex(key);
        expect(color.hex).toEqual(hexColors[key]);
        expect(color.hexString).toEqual(`#${hexColors[key]}`);
      });
    });
    xit('Can set HSL value with no alpha set', () => {
      const hslColors = [
        [360, 100, 100],
        [120, 50, 50],
        [20, 25, 25],
      ];
      hslColors.forEach(value => {
        // TODO destructure values
        color.setHSL(...value);
        expect(color.hue).toEqual(value[0]);
        expect(color.saturation).toEqual(value[1]);
        expect(color.lightness).toEqual(value[2]);
      });
    });
    xit('Can set HSB value with no alpha set', () => {
      const hslColors = [
        [360, 100, 100],
        [120, 50, 50],
        [20, 25, 25],
      ];
      hslColors.forEach(value => {
        // TODO destructure values
        color.setHSL(...value);
        expect(color.hue).toEqual(value[0]);
        expect(color.saturation).toEqual(value[1]);
        expect(color.lightness).toEqual(value[2]);
      });
    });
  });
  describe('Can store values with alpha values and retrieve them', () => {
    const color = new Color();
    xit('Can set RGB value with alpha set', () => {
      const rgbColors = [
        [255, 255, 255, 1],
        [100, 155, 234, 0.5],
        [0, 0, 0, 0.2],
        [90, 160, 270, 0.3],
      ];
      rgbColors.forEach(values => {
        const [r, g, b, a] = values;
        color.setRGB(r, g, b, a);
        expect(color.red).toEqual(values[0]);
        expect(color.green).toEqual(values[1]);
        expect(color.blue).toEqual(values[2]);
        expect(color.alpha).toEqual(values[3]);
        expect(color.rgb).toEqual(values);
      });
    });
    xit('Can set HEX value with alpha values and retrieve them', () => {
      const hexColors = ['#ff00bb00', '#cccf', '#abababff', 'abcabc00'];
      hexColors.forEach(value => {
        color.setHex(value);
        expect(color.hex).toEqual(value);
        // TODO convert alpha from HEX to BINARY and test it
      });
    });
    xit('Can set HSL value with with alpha values and retrieve them', () => {
      const hslColors = [
        [360, 100, 100, 0.5],
        [120, 50, 50, 0.2],
        [20, 25, 25, 0.1],
      ];
      hslColors.forEach(value => {
        // TODO destructure values
        color.setHSL(...value);
        expect(color.hue).toEqual(value[0]);
        expect(color.saturation).toEqual(value[1]);
        expect(color.lightness).toEqual(value[2]);
        expect(color.alpha).toEqual(value[3]);
      });
    });
    xit('Can set HSB value with with alpha values and retrieve them', () => {
      const hsbColors = [
        [360, 100, 100],
        [120, 50, 50],
        [20, 25, 25],
      ];
      hsbColors.forEach(value => {
        // TODO destructure values
        color.setHSB(...value);
        expect(color.hue).toEqual(value[0]);
        expect(color.saturation).toEqual(value[1]);
        expect(color.brightness).toEqual(value[2]);
        expect(color.alpha).toEqual(value[3]);
      });
    });
  });

  describe('Can convert values', () => {
    const color = new Color();
    xit('from RGB', () => {
      // TODO expect HEX
      // TODO expect HSL
      // TODO expect HSB
    });
    xit('from HEX', () => {
      // TODO expect RGB
      // TODO expect HSL
      // TODO expect HSB
    });
    xit('from HSL', () => {
      // TODO expect RGB
      // TODO expect HEX
      // TODO expect HSB
    });
    xit('from HSB', () => {
      // TODO expect RGB
      // TODO expect HEX
      // TODO expect HSL
    });
  });
});
