/**
 * Returns an [R,G,B] color
 *
 * @param {String} hexColor
 * @returns {Array}
 */

function convertHexToRgb(hexColor) {
  const regExp = /^[a-f0-9]+$/;

  function getBase16(start, end) {
    return parseInt(hexColor.slice(start,end), 16);
  }

  if (typeof hexColor !== "string" || !regExp.test(hexColor)) {
    throw "hexColor is not a valid hexadecimal color";
  }

  const hexColorLen = hexColor.length;

  if (hexColorLen === 3) {
    let arrHex = hexColor.split("");
    arrHex.splice(0, 0, arrHex[0]);
    arrHex.splice(2, 0, arrHex[2]);
    arrHex.splice(4, 0, arrHex[4]);
    hexColor = arrHex.join("");
  } else if (hexColorLen !== 6) {
    throw "hexColor is not a valid hexadecimal color";
  }

  return [getBase16(0,2), getBase16(2,4), getBase16(4,6)];
}

module.exports = convertHexToRgb;
