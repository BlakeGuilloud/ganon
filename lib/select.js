/**
 * `select` returns a new object containing values from an original
 * object. The values to select are described by an array of property
 * names.
 *
 * @params {Array} keys Array of property name strings.
 * @params {Object} object An object to select values from.
 * @returns {Object} The new object.
 */
function select(keys, object) {
  if (!keys) return {};
  const newObj = {};

  keys.map((key) => {
    if (key in object) {
      newObj[key] = object[key];
    }
  });
  return newObj;
}

module.exports = select;
