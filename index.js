var pixels  = require('canvas-pixels')
var assert  = require('assert/')

module.exports = letterBitmap

var _shared
function shared() {
  if (!_shared) _shared = document
    .createElement('canvas')
    .getContext('2d')

  return _shared
}

function letterBitmap(ch, font, size, ctx) {
  assert(typeof ch === 'string', 'Character must be a string')
  assert(ch.length === 1, 'Character supplied must be of length 1')

  ctx = ctx || shared()

  var canvas = ctx.canvas
  canvas.width  = 500
  canvas.height = 500
  ctx.font = '24px ' + (font || 'normal')

  var width = ctx.measureText('a').width / 24 * size
  canvas.width  =
  canvas.height = size

  ctx.font = width+'px ' + (font || 'normal')
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, size, size)
  ctx.fillStyle = '#fff'
  ctx.fillText(ch, size / 2, size / 2)

  var image = pixels(ctx)
  var data = new Float32Array(size * size)
  var n = -4
  for (var x = 0; x < size; x++)
  for (var y = 0; y < size; y++) {
    data[x + y * size] = image[n += 4]
  }

  return data
}
