/**
 * Returns symmetric difference between two arrays
 *
 * @param {array} a
 * @param {array} b
 * @returns {array}
 */

function symmetricDifference(a, b) {
  // add your code here
  if (a.constructor != Array || b.constructor != Array) {
    throw new Error("Invalid arguments");
  }

  let setA = new Set(a);
  let setB = new Set(b);

  var difference = new Array();
  a.forEach(function(num) {
    if (setB.has(num) == false) {
      difference.push(num);
    }
  });


  b.forEach(function(num) {
    if (setA.has(num) == false) {
      difference.push(num);
    }
  });

  return difference;
}

module.exports = symmetricDifference;
