/**
 * Returns the truth value of the biconditional (logical equivalence).
 * https://en.wikipedia.org/wiki/Logical_biconditional
 * (p → q) ∧ (q → p)
 *
 * @param {*} antecendent
 * @param {*} consequent
 * @return {Boolean}
 *
 */

function getBiconditional(antecendent = false, consequent = false) {
  // First let cast the arguments to booleans
  let a = !!antecendent;
  let b = !!consequent;
  // Then apply the logical operation
  return (a && b) || (!a && !b);
}

module.exports = getBiconditional;
