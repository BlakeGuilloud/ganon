/**
 * A function which returns a true when
 * a given array or object is empty
 * @param {Array or Object} type
 * @returns {boolean}
 *
 * Examples:
 *  isEmpty([]) === true
 *  isEmpty([1, 2, 3]) === false
 *  isEmpty({}) === true
 *  isEmpty({"key": "value"}) === false
 */
export function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return Object.keys(value).length === 0;
}

module.exports = isEmpty;
