/**
 * Return an Object from a given Array
 *
 * [33, "foo", "bing"]
 * >> { "33": undefined, "foo": undefined, "bing": undefined }
 *
 * [["33", "foo"], ["bing", "free"]]
 * >> { "33": "foo", "bing": "free" }
 *
 * ["33", "foo", ["bing", "free", ["bop", 72]]]
 * >> {
        "33": undefined,
        "foo": undefined,
        "bing": {
          "free": undefined,
          "bop": 72
        }
      }
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
  if (Array.isArray(arr)) return loopOverArray(arr);

  return {};
}

module.exports = arrayToObject;
