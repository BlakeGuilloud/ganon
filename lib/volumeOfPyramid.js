/**
 * @param {Number} l is the base length of the pyramid
 * @param {Number} w is the base width of the pyramid
 * @param {Number} h is the pyramid height
 * @return {Number} Volume of pyramid
 *
 * @throws "Invalid Type" if either of {@param l} {@param w} {@param h} is not a number
 * @throws "Invalid Value" if either of {@param l} {@param w} {@param h} is negative
 */

function volumeOfPyramid(l, w, h) {
  // throw new Error("Invalid Type");
  if (isNaN(l) || isNaN(w) || isNaN(h)) {
    throw "Invalid Type";
  }
  // throw new Error("Invalid Value");
  if (l < 0 || w < 0 || h < 0) {
    throw "Invalid Value";
  }

  var volume = (l * w * h) / 3;
  return volume;
}

module.exports = volumeOfPyramid;
