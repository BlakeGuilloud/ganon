/**
 * Takes an object and inverts keys and values.
 * eg. {one: "1", two: "2", three: "3"}
 * returns {"1": "one", "2": "two", "3": "three"}
 * @param  {Object} obj object to invert
 * @return {Object}     inverted object
 */
function invert(obj) {
  if (typeof(obj) !== "object") {
    return obj;
  }

  const inverted = {};

  for (let prop in obj) {
    let val = obj[`${prop}`];

    inverted[val] = prop;
  }

  return inverted;
}

module.exports = invert;
