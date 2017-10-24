/**
* Write a function that calculates the average acceleration given the initial/final velocity and initial/final time.
* avgAcceleration = (v(final) - v(initial)) / (t(final) - t(initial))
* @param {Number} velocityInitial
* @param {Number} velocityFinal
* @param {Number} timeInitial
* @param {Number} timeFinal
* @return {Number} possibly a floating point value.
*/
function averageAcceleration(velocityInitial, velocityFinal, timeInitial, timeFinal) {

  var avgAcceleration = (velocityFinal - velocityInitial) / (timeFinal - timeInitial);
  return avgAcceleration;
}

module.exports = averageAcceleration;
