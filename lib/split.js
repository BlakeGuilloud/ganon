/**
 * Splits an array into 2 arrays
 * The input array should not be modified
 * The first array should be returned as a property called "fst" on the object
 * The second array should be returned as a property called "snd" on the object
 * If arr has length 2n, fst and snd should have length n
 * If arr has length 2n + 1, fst should have length n + 1 and snd should have
 * length n
 * It should be the case that fst.concat(snd) is the same as arr (not === but
 * same values)
 * If the input is not of type Array, throw an error
 *
 * @param {Array} the array to split
 * @returns {Object} the two arrays
 */

function split(arr) {
  const firstBreak = Math.ceil(arr.length / 2);
  const fst = [];
  const snd = [];
  arr.forEach((element, i) => {
    if (i < firstBreak) {
      fst.push(element);
    } else {
      snd.push(element);
    }
  });
  return {
    fst,
    snd
  };
}

module.exports = split;
