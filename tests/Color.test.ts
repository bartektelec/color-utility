import Color from "../src/index";
import prettifyHex from "../src/utils/prettifyHex";

describe("Test Color utility", () => {
  describe("Can store values and retrieve them", () => {
    const color = new Color();
    it("Can set RGB value with no alpha set", () => {
      const rgbColors = [
        [255, 255, 255],
        [100, 155, 234],
        [0, 0, 0],
        [90, 160, 270],
      ];
      rgbColors.forEach((values) => {
        const [r, g, b] = values;
        color.setRGB(r, g, b);
        expect(color.red).toEqual(values[0]);
        expect(color.green).toEqual(values[1]);
        expect(color.blue).toEqual(values[2]);
        expect(color.rgb).toEqual(values);
        expect(color.rgbString).toEqual(`rgb(${r}, ${g}, ${b})`);
        expect(color.rgba).toEqual([...values, 1]);
        expect(color.rgbaString).toEqual(`rgba(${r}, ${g}, ${b}, 1)`);
        expect(color.alpha).toEqual(1);
      });
    });
    it("Can set HEX value with no alpha set", () => {
      const hexColors = {
        "#ff00bb": "ff00bb",
        "#ccc": "cccccc",
        "#ababab": "ababab",
        abcabc: "abcabc",
        "333": "333333",
      };
      Object.keys(hexColors).forEach((key) => {
        color.setHex(key);
        expect(color.hex).toEqual(hexColors[key]);
        expect(color.hexa).toEqual(hexColors[key] + "ff");
        expect(color.hexString).toEqual(`#${hexColors[key]}`);
        expect(color.hexaString).toEqual(`#${hexColors[key]}ff`);
        expect(color.alpha).toEqual(1);
      });
    });
    it("Can set HSL value with no alpha set", () => {
      const hslColors = [
        [360, 100, 100],
        [120, 50, 50],
        [20, 25, 25],
      ];
      hslColors.forEach((value) => {
        // TODO destructure values
        const [hue, sat, light] = value;
        color.setHSL(hue, sat, light);
        expect(color.hue).toEqual(hue);
        expect(color.saturation).toEqual(sat);
        expect(color.lightness).toEqual(light);
        expect(color.hsl).toEqual([hue, sat, light]);
        expect(color.hslString).toEqual(`hsl(${hue}, ${sat}, ${light})`);
        expect(color.hsla).toEqual([hue, sat, light, 1]);
        expect(color.hslaString).toEqual(`hsla(${hue}, ${sat}, ${light}, 1)`);
      });
    });
    it("Can set HSB value with no alpha set", () => {
      const hsbColors = [
        [360, 100, 100],
        [120, 50, 50],
        [20, 25, 25],
      ];
      hsbColors.forEach((value) => {
        // TODO destructure values
        const [hue, sat, bri] = value;
        color.setHSB(hue, sat, bri);
        expect(color.hue).toEqual(hue);
        expect(color.saturation).toEqual(sat);
        expect(color.brightness).toEqual(bri);
        expect(color.hsb).toEqual([hue, sat, bri]);
        expect(color.hsbString).toEqual(`hsb(${hue}, ${sat}, ${bri})`);
        expect(color.hsba).toEqual([hue, sat, bri, 1]);
        expect(color.hsbaString).toEqual(`hsba(${hue}, ${sat}, ${bri}, 1)`);
      });
    });
  });
  describe("Can store values with alpha values and retrieve them", () => {
    const color = new Color();
    it("Can set RGB value with alpha set", () => {
      const rgbColors = [
        [255, 255, 255, 1],
        [100, 155, 234, 0.5],
        [0, 0, 0, 0.2],
        [90, 160, 270, 0.3],
      ];
      rgbColors.forEach((values) => {
        const [r, g, b, a] = values;
        color.setRGB(r, g, b, a);
        expect(color.red).toEqual(r);
        expect(color.green).toEqual(g);
        expect(color.blue).toEqual(b);
        expect(color.alpha).toEqual(a);
        expect(color.rgb).toEqual([r, g, b]);
        expect(color.rgba).toEqual([r, g, b, a]);
        expect(color.rgbString).toEqual(`rgb(${r}, ${g}, ${b})`);
        expect(color.rgbaString).toEqual(`rgba(${r}, ${g}, ${b}, ${a})`);
      });
    });
    it("Can set HEX value with alpha values and retrieve them", () => {
      const hexColors = [
        { val: "#ff00bbbb", hex: "ff00bb", alpha: 187 },
        { val: "#cccc", hex: "cccccc", alpha: 204 },
        { val: "#abababab", hex: "ababab", alpha: 171 },
        { val: "abcabcff", hex: "abcabc", alpha: 255 },
        { val: "3333", hex: "333333", alpha: 51 },
      ];
      hexColors.forEach((colorObj) => {
        color.setHex(colorObj.val);
        const { hex, hexa } = prettifyHex(colorObj.val);
        expect(color.hex).toEqual(colorObj.hex);
        expect(color.hex).toEqual(hex);
        expect(color.hexa).toEqual(hexa);
        expect(color.alpha).toEqual(colorObj.alpha / 255);
      });
    });
    it("Can set HSL value with alpha channel", () => {
      const hslColors = [
        [360, 100, 100, 1],
        [120, 50, 50, 0.5],
        [20, 25, 25, 0],
      ];
      hslColors.forEach((value) => {
        const [hue, sat, light, a] = value;
        color.setHSL(hue, sat, light, a);
        expect(color.hue).toEqual(hue);
        expect(color.saturation).toEqual(sat);
        expect(color.lightness).toEqual(light);
        expect(color.alpha).toEqual(a);
      });
    });
    it("Can set HSB value with alpha channel", () => {
      const hsbColors = [
        [360, 100, 100, 1],
        [120, 50, 50, 0.5],
        [20, 25, 25, 0.25],
        [20, 25, 25, 0],
      ];
      hsbColors.forEach((value) => {
        // TODO destructure values
        const [hue, sat, bri, a] = value;
        color.setHSB(hue, sat, bri, a);
        expect(color.hue).toEqual(hue);
        expect(color.saturation).toEqual(sat);
        expect(color.brightness).toEqual(bri);
        expect(color.alpha).toEqual(a);
      });
    });
  });

  describe("Can convert values", () => {
    const color = new Color();
    it("from RGB", () => {
      const colors = [
        {
          rgb: [255, 255, 255],
          hex: "ffffff",
        },
        {
          rgb: [111, 160, 83],
          hex: "6fa053",
        },
        {
          rgb: [150, 83, 160],
          hex: "9653a0",
        },
      ];

      colors.forEach((colorObject) => {
        const [r, g, b] = colorObject.rgb;
        color.setRGB(r, g, b);
        expect(color.red).toEqual(r);
        expect(color.green).toEqual(g);
        expect(color.blue).toEqual(b);
        expect(color.hex).toEqual(colorObject.hex);
      });
      // TODO expect HEX
      // TODO expect HSL
      // TODO expect HSB
    });
    it("from HEX", () => {
      // TODO expect RGB
      const colors = [
        {
          rgb: [255, 255, 255],
          hex: "ffffff",
        },
        {
          rgb: [111, 160, 83],
          hex: "6fa053",
        },
        {
          rgb: [150, 83, 160],
          hex: "9653a0",
        },
      ];

      colors.forEach((colorObject) => {
        const [r, g, b] = colorObject.rgb;
        color.setHex(colorObject.hex);
        expect(color.red).toEqual(r);
        expect(color.green).toEqual(g);
        expect(color.blue).toEqual(b);
      });
      // TODO expect HSL
      // TODO expect HSB
    });
    xit("from HSL", () => {
      // TODO expect RGB
      // TODO expect HEX
      // TODO expect HSB
    });
    xit("from HSB", () => {
      // TODO expect RGB
      // TODO expect HEX
      // TODO expect HSL
    });
  });
});
