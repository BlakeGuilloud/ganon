/**
 * Returns the truth value of the conditional (material conditional).
 * AKA formal implication
 * https://en.wikipedia.org/wiki/Material_conditional
 * antecendent → consequent
 *
 * @param {*} antecendent
 * @param {*} consequent
 * @return {Boolean}
 *
 */

function getMaterialConditional(antecendent = false, consequent = false) {
  var ante = !!antecendent;
  var cons = !!consequent;

  if (ante === false ) return true;

  return ante && cons;
}

module.exports = getMaterialConditional;
