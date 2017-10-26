/**
 * A 2D Point.
 * @typedef {Object} Point
 * @property {Number} x The x coordinate.
 * @property {Number} y The y coordinate.
 */

/**
 * Calculate and return the slope of the line connecting the two points A and B
 * The points are given as objects with properties x, y representing their x, y coordinates on a 2D plane.
 *
 * @param {Point} X
 * @param {Point} Y
 * @return {Number} The slope of the line connecting A and B.
 */
function slopeOfLine(A, B) {
  if (isValid(A, B))
    return (B.y - A.y) / (B.x - A.x);
  else
    throw TypeError("Invalid arguments");
}

function isValid(A, B) {
  return ("x" in A && "x" in B && "y" in A && "y" in B)
    && (!isNaN(A.x) && !isNaN(A.y) && !isNaN(B.x) && !isNaN(B.y));
}

module.exports = slopeOfLine;
