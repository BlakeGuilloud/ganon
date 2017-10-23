/**
 * Given an object (can be nested or not) and key to find,
 * traverse each node inside the object, when the particular key found, push its value into an array
 * return null if object is null or is not an object
 * Ex. valFromObjectKey({"book":{"book": ""}}, "book") => [{"book":""}, ""]
 * Ex. valFromObjectKey({"human":{"name": "michael"}, "dog":{"name": "james"}, "cat":{"name": "patt"}}, "name") => ["michael", "james", "patt"]
 * @param {Object} obj
 * @param {String} keyToFind
 * @return {Array}
 */
function valFromObjectKey (obj, keyToFind) {
  return [];
}

module.exports = valFromObjectKey;
