/**
 *  Write a function that returns the area of a rectangle with length and height as input.
 * @param {Number} length
 * @param {Number} height
 * @return {Number} possibly a floating point value.
 */
function areaOfRectangle (length, height) {
  if (length <= 0 || height <= 0 || typeof length !== "number" || Number.isNaN(length) || !Number.isFinite(length) || typeof height !== "number" || Number.isNaN(height) || !Number.isFinite(height)) {
    throw new Error("Rectangle doesn't exist");
  }

  return length * height;
}

module.exports = areaOfRectangle;