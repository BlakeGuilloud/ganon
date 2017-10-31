/**
 * Return an Object from a given Array
 *
 * @param {Array} arr
 * @returns {Object}
 */

function loopOverArray(arr, obj) {
  let tempObj = obj || {};

  arr.forEach((item, idx) => {
    if (Array.isArray(item)) {
      if (item.length > 2) {
        tempObj[item[0]] = {};
        loopOverArray(item.slice(1), tempObj[item[0]]);
      } else {
        tempObj[item[0]] = item[1];
      }
    } else {
      tempObj[item] = undefined;
    }
  });

  return tempObj;
}

function arrayToObject(arr) {
  if (Array.isArray(arr)) {
    return loopOverArray(arr);
  }

  return {};
}

module.exports = arrayToObject;
