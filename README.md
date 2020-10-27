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
import Color from ".../index.ts";
const myColor = new Color();
```

Assign it a value using any supported color format

```js
myColor.setRGB(255,100,50);
myColor.setHex("")
...
```

## Read more

[Color() class](docs/color-object.md)
[Utilities](docs/utility-functions.md)
