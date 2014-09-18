# letter-bitmap [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Generate a single-channel bitmap for an individual character of a given font.

## Usage

[![NPM](https://nodei.co/npm/letter-bitmap.png)](https://nodei.co/npm/letter-bitmap/)

### `data = letter(char, font, size, [context])`

Returns a 2D `Float32Array` containing the font data, on a scale from 0 (empty)
to 255 (solid).

* `char` is the character you want to render.
* `font` is the font family you'd like to use.
* `size` is the total width/height of the canvas, in pixels. The final data
  length will be `size * size`.
* `context` is an optional 2D canvas context to use. Note that this will mess
  with the canvas itself.

[![letter-bitmap](http://imgur.com/5W9XirT.png)](http://hughsk.io/letter-bitmap)

## License

MIT. See [LICENSE.md](http://github.com/hughsk/letter-bitmap/blob/master/LICENSE.md) for details.
