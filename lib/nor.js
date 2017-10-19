/**
 * Write a function that looks at both params and returns true
 * if both params are true or false, but returns false otherwise.
 * @param {Boolean} a
 * @param {Boolean} b
 */
function nor(a, b) {
  return !(a || b);
}

module.exports = nor;
