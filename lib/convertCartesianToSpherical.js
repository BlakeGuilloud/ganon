const { roundTo, convertRadiansToDegrees } = require(".");

const roundTo4 = x => roundTo(x, 4);

/**
 * Convert Cartesian (x,y,z) to Spherical (r,θ,φ) coordinates in 3-dimensions
 * @param {array} [x,y,z] Cartesian system of coordinates
 * @return {array} [r,θ,φ] Spherical system of coordinates
 */

function convertCartesianToSpherical([x, y, z]) {
  const r = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
  const theta = convertRadiansToDegrees(Math.atan(y / x));
  const phi = convertRadiansToDegrees(Math.acos(z / r));
  return [r, theta, phi].map(roundTo4);
}

module.exports = convertCartesianToSpherical;
