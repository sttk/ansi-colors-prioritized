'use strict';

var nestableColors = require('ansi-colors-nestable');

function prioritizedColors(/* ...colors */) {
  for (var i = 0, n = arguments.length; i < n; i++) {
    var color = nestableColors(arguments[i]);
    if (color !== nestableColors.noColor) {
      return color;
    }
  }
  return nestableColors.noColor;
}

module.exports = prioritizedColors;
