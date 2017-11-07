/**
 * Reduces list from right index to left. Like Array.prototype.reduce, but arabian.
 * @param {Array} list
 * @param {Function} iteratee
 * @param {*} memo
 * @return {*}
 */

function reduceRight(list, iteratee, memo) {
  if (typeof iteratee !== "function") {
    throw "Iteratee should be a function";
  }

  if (!Array.isArray(list)) {
    throw "List should be an array";
  }

  const item = list.pop();
  return item ? reduceRight(list, iteratee, iteratee(memo, item)) : memo;

}

module.exports = reduceRight;
