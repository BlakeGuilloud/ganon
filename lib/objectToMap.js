/**
 * Converts Object into key-value Map.
 * { key: value, foo: bar }
 * >> [[key, value], [foo, bar]]
 *
 * @param {Object} obj
 * @returns {Map}
 */

const isObjectLiteral = obj => ({}.toString.call(obj) == "[object Object]");

function objectToMap(obj = {}) {
  if (isObjectLiteral(obj)) {
    let map = new Map();

    Object.keys(obj).forEach(key => {
      map.set(key, obj[key]);
    });

    return map;
  }

  throw "obj must be type Object";
}

module.exports = objectToMap;
