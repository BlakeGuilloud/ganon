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
  var result = {};

  if (!Array.isArray(keys)) {
    throw new TypeError("Expected the first argument to be an instance of Array but it was not");
  }

  if (typeof object !== "object") {
    throw new TypeError("Expected the second argument to be an object but it was " + typeof object);
  }

  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var val;
    if (object.hasOwnProperty(key)) {
      val = object[key];
      result[key] = val;
    }
  }

  return result;
}

module.exports = select;
