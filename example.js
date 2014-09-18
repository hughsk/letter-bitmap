var canvas = require('ndarray-canvas')
var ndarray = require('ndarray')
var character = require('./')

var str = 'Lorem Ipsum, dolor sit – amet!'
for (var i = 0; i < str.length; i++) {
  make(str.charAt(i))
}

function make(ch) {
  var data = character(ch, 'Helvetica', 64)
  var nda  = ndarray(data, [64, 64])

  document.body.appendChild(
    canvas(null, nda)
  ).style.margin = '0.25em'
}
