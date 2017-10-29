/**
 * Returns an hexadecimal color
 *
 * @param {Array} rgb
 * @returns {String}
 */

function convertRgbToHex(rgb) {
  if (!Array.isArray(rgb) || rgb.length != 3 || !isValidComp(rgb[0]) || !isValidComp(rgb[1]) || !isValidComp(rgb[2])) {
    throw "rgb is not a valid rgb color";
  }
  return componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

function componentToHex(component) {
  var hex = component.toString(16);
  if (hex.length == 1) hex = "0" + hex;
  return hex;
}

function isValidComp(component) {
  if (!isNaN(component) && component <= 255 && component >= 0) {
    return true;
  }
  return false;
}

module.exports = convertRgbToHex;
