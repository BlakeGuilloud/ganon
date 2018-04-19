/*
 * Applies a function against each item in a collection from left to right
 * and returns a new collection with the results
 *
 * @param {Array | Object} collection
 * @param {Function} callback
 * @returns {Array | Object}
 */

const isObject = require("./isObject");
const isFunction = require("./isFunction");

function mapCollection(collection, callback) {
  if(!isFunction(callback)) callback = item => item;

  if (Array.isArray(collection)) {
    return collection.map(callback);
  }

  if (isObject(collection)) {
    let tempObj = {};

    Object.keys(collection).map((key, index) => {
      tempObj[key] = callback(collection[key]);
    });

    return tempObj;
  }

  throw "Collection parameter must be an Array or Object";
}

module.exports = mapCollection;
