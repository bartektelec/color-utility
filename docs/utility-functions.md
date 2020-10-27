# Utility functions

This package includes several utility functions for converting color values. These are more strict about the input than the Color() object.

## Methods

### hexToRgb

- `hexToRgb(hex)`
  Converts provided hex value (string) to 8-bit RGB value.
  Output:

  ```js
  {
      red: 0-255,
      green: 0-255,
      blue: 0-255,
      alpha: 0-1
  }
  ```

**Example**

```js
hexToRgb("6fa053");
// {red: 111, green: 160, blue: 83, alpha: 1}
```

---

### rgbToHex

- `rgbToHex(r, g, b, a?)`
  Converts provided 8-bit rgb value to hex value.
  Output:

  ```js
  {
      hex: "rrggbb",
      hexa: "rrggbbff"
  }
  ```

**Example**

```js
rgbToHex(111, 160, 83);
// {hex: "6fa053", hexa: "6fa053ff"}
```
