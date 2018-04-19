/**
 * Write a function that returns the surface area of a sphere with the given radius as input.
 *
 * @param {Number} radius
 * @return {Number} surface area.
**/
function surfaceAreaOfSphere(radius) {
  if(radius < 0)
    throw "Length of the radius must be positive!";
  return 4 * Math.PI * Math.pow(radius, 2);
}

module.exports = surfaceAreaOfSphere;