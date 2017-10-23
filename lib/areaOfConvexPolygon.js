/**
 * Write a function that returns area of the given polygon.
 * Assume polygon is convex.
 * Assume also that n-th points is connected to (n + 1)-th and last point is connected to first.
 *
 * @param {Array} points - list of points, such as: [[0, 0], [1, 0], [1, 1], [0, 1]]
 * @return {Number} area - possibly a floating point value.
 */
function areaOfConvexPolygon(points) {
  if (Array.isArray(points) && (points.length <= 2 || points.some(x => x.length !== 2 || !Array.isArray(x)))) {
    throw new Error("Polygon does not exist");
  }

  let numerator = 0;

  for (let i = 0; i < points.length; i++) {
    const first = points[i];
    let second = null;

    if (i === points.length - 1) {
      second = points[0];
    }
    else {
      second = points[i + 1];
    }

    numerator += (first[0] * second[1] - second[0] * first[1]);
  }

  return Math.abs(numerator * .5);
}

module.exports = areaOfConvexPolygon;