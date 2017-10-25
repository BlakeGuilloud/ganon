/**
* `get` the value of a prop inside an object
* if value is undefined return default
*
* @param {Objects} object The object to inspect
* @param {String} path The property name
* @param {*} [defaultVal] The default value to return if undefined is resolved.
* @returns {*} returns the resolved value
**/

function get(object, path, defaultVal) {
  if (object.hasOwnProperty(path)) {
    return object[path];
  }

  return defaultVal;
  // throw new Error( "Method is still a skeleton" );
}

module.exports = get;
