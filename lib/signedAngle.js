/**
* Return the angle in degrees with the smallest possible absolute value
*
* @param {number} angle
* @return number signed degrees with smallest possible magnitude
*
* @example
* signedAngle(41) // -> 41
* signedAngle(181) // -> -179
* signedAngle(360)  // -> 0
*/
function signedAngle(angle) {
  const normalizedAngle = angle % 360;
  const signedAngle = normalizedAngle < -180 ? normalizedAngle + 360
    : (
      normalizedAngle > 180 ? normalizedAngle - 360
        : normalizedAngle
    );
  return signedAngle;
}

module.exports = signedAngle;
