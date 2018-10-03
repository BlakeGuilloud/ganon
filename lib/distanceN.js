import isArray from "./isArray";
import difference from "./difference";
import square from "./square";
import squareRoot from "./squareRoot";

/**
 * Calculates the distance between two N-dimensional points.
 * @param {Array} a
 * @param {Array} b
 * @throws {Error} "Mis-matching dimensions", "Empty points", "Not a point"
 * @returns {Number}
 */
function distanceN(a, b) {
  if (!isArray(a) || !isArray(b)) {
    throw new Error("Not a point");
  }

  if (a.length === 0 || b.length === 0) {
    throw new Error("Empty points");
  }

  if (a.length !== b.length) {
    throw new Error("Mis-matching dimensions");
  }

  const len = a.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    if (typeof a[i] !== "number" || typeof b[i] !== "number") {
      throw new Error("Not a point");
    }
    sum += square(difference(a[i], b[i]));
  }
  return squareRoot(sum);
}

module.exports = distanceN;
