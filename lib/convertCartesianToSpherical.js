/**
 * Round a number to a certain number of decimal places
 * @param {Number} the number to round
 * @param {Number} the number of decimal places
 * @return {Number} the rounded number
 */

function roundTo(x, y) {
  return Number(x.toFixed(y));
}

const roundTo4 = x => roundTo(x, 4);

/**
 * Convert Cartesian (x,y,z) to Spherical (r,θ,φ) coordinates in 3-dimensions
 * @param {array} [x,y,z] Cartesian system of coordinates
 * @return {array} [r,θ,φ] Spherical system of coordinates
 */

function convertCartesianToSpherical([x, y, z]) {
  const r = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
  const theta = Math.atan(y / x);
  const phi = Math.acos(z / r);
  return [r, theta, phi].map(roundTo4);
}

module.exports = convertCartesianToSpherical;
