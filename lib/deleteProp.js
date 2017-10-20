/**
 * Write a function that takes in an object and a string value. It should delete the property that matches the string value
 * @param {Object} obj
 * @param {String} str
 */

function deleteProp(obj, str) {
  return Object.keys(obj).reduce(
    (acc, key) => (key === str ? acc : { ...acc, ...{ [key]: obj[key] } }),
  );
}

module.exports = deleteProp;
