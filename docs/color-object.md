# Color object

The `Color` object is the main object of this utility module. It wraps all the conversion methods into one single object which makes it easy to use.

## Demo

```js
const myColor = new Color()
// TODO planned feature: assigning value to the constructor
const redColor = new Color("rgb(255,0,0)")
const blueColor = new Color("#0000ff")
etc ...
```

## Methods

### setRGB

- `setRGB(red, green, blue, alpha?)`
  Sets object's current color to RGB values provided.
  _red, green, blue must be of type number and match 0 < x < 255.
  Alpha is optional, must be of type number and match 0 < x < 1. If alpha is not specified it will be set to 1 (full opacity) by default._

**Example**

```js
color.setRGB(255, 10, 20); // set to rgb
color.setRGB(100, 150, 200, 0.5); // set to rgba
```

---

### setHex

- `setHex(hex)`
  Sets object's current color to Hex value provided.
  The value **can** start with the **#** - sign, and/or end with a alpha channel value. _If alpha is not specified it will be set to 1 (full opacity) by default._

**Example**

```js
color.setHex('#ababab'); // set to #ababab
color.setHex('333'); // set to #333333
color.setHex('#aaab'); // set to #aaaaaa with alpha 0.11
```

---
