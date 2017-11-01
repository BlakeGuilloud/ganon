/**
 * Write a function that extends a target object with
 * another property. The target should be left unchanged.
 * @param {Object} target
 * @param {String} propName
 * @param {*} propValue
 */
function addProp(target, propName, propValue) {
  return { ...target, ...{ [propName]: propValue } };
}

module.exports = addProp;
