/**
 * `union` combines multiple arrays into a single one with the unique
 * values from each.
 *
 * @param {Arrays} One or more arrays.
 * @returns {Array} The resulting array of unique values.
 */
function union() {

  var args = Array.from(arguments);
  var outputSet = new Set();
  var tempSet;

  args.forEach(elem => {
    if(Array.isArray(elem)) {
      tempSet = new Set(elem);
      outputSet = new Set([...outputSet, ...tempSet]);
    }
  });
  return Array.from(outputSet);
}

module.exports = union;
