/**
 *  Write a function that returns the area of a triangle with base and height as input.
 * @param {Number} base
 * @param {Number} height
 * @return {Number} possibly a floating point value.
 */
function areaOfTriangle (base, height) {
  if(base <= 0 || height <= 0 || !(typeof base == "number" && !Number.isNaN(base) && Number.isFinite(base)) || !(typeof height == "number" && !Number.isNaN(height) && Number.isFinite(height))) {
    throw new Error("Triangle doesn't exist");
  }
  return (base * height) / 2;
}

module.exports = areaOfTriangle;
