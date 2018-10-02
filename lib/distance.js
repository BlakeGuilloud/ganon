import difference from "./difference";
import square from "./square";
import squareRoot from "./squareRoot";
import sum from "./sum";

/**
 * A 2D Point.
 * @typedef {Object} Point
 * @property {Number} x The x coordinate.
 * @property {Number} y The y coordinate.
 */

/**
 * Calculates the distance between two points.
 * @param {Point} a
 * @param {Point} b
 * @returns {Number}
 */
function distance(a, b) {
  return squareRoot(
    sum(
      square(
        difference(a.x, b.x)),
      square(
        difference(a.y, b.y))));
}

module.exports = distance;
