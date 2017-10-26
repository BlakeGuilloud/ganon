const abs = require("./abs");

/**
 * A 2D Point.
 * @typedef {Object} Point
 * @property {Number} x The x coordinate.
 * @property {Number} y The y coordinate.
 */

/**
 * Calculate and return the Manhattan Distance between two points on a 2D plane.
 * The points are given as objects with properties x, y representing there x and y coordinates on the axes respectively.
 *
 * @param {Point} X
 * @param {Point} Y
 * @return {Number} the Manhattan Distance between X and Y.
 */
function manhattanDistance(X, Y) {
  const errorMessage = "Parameters must be objects with number-equivalent properties \"x\" and \"y\"";

  // check validity of X
  if (!(X instanceof Object) ||
    !X.hasOwnProperty("x") || !X.hasOwnProperty("y") ||
    isNaN(X.x) || isNaN(X.y)) {
    throw new Error(errorMessage);
  }

  // check validity of Y
  if (!(Y instanceof Object) ||
    !Y.hasOwnProperty("x") || !Y.hasOwnProperty("y") ||
    isNaN(Y.x) || isNaN(Y.y)) {
    throw new Error(errorMessage);
  }

  return abs(Number(X.x) - Number(Y.x)) + abs(Number(X.y) - Number(Y.y));
}

module.exports = manhattanDistance;
