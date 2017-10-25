/**
 * Given the object and an array of props should return
 * new object built from original one without this props
 * @param obj: Object to be manipulated
 * @param paths: Array of property paths to be omitted
 * @return object
 */
function omit(obj, paths) {
  return Object.keys(obj)
    .filter(key => paths.indexOf(key) === -1)
    .reduce((o, key) => ({...o, [key]: obj[key]}), {});
}

module.exports = omit;
