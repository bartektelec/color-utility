# color-utility

A utility module created to easily convert color values to different formats.

Planned support for RGB, HEX, HSL, HSB, with or without alpha channel values.

## Currently supported formats

- [x] RGB
- [x] Hex
- [ ] HSL
- [ ] HSB
- [x] RGBA
- [x] Hex w/ alpha channel
- [ ] HSLA
- [ ] HSBA

## How to

Import the `Color` object to your project
and create a new instance of `Color`

```js
import Color from '.../index.ts';
const myColor = new Color();
```

Assign it a value using any supported color format

```js
myColor.setRGB(255,100,50);
myColor.setHex("")
...
```

## Known issues and to-dos

- [ ] Need more tests, it seems like converting RGB to HEX doesn't work as expected, has problems with double 0's
- [ ] Values for hsl-saturation and hsb-saturation should be stored separately
- [ ] Lacks conversion from HSL to RGB
- [ ] Lacks conversion from HSB to RGB
- [ ] Lacks conversion from HSL/RGB or HEX to HSB
- [ ] Utility function for rgbToHsb
- [ ] Utility function for hexToHsl and hexToHsb
- [ ] Utility function for hslToRgb, hslToHex and hslToHsb
- [ ] Utility function for hsbToRgb, hsbToHex and hsbToHsl

## Read more

- [Color() class](docs/color-object.md)
- [Utilities](docs/utility-functions.md)
