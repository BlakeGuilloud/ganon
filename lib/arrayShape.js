/**
 * Returns new Array with dimensions from said parameters
 *
 * @param {Array} arr
 * @param {Integer} breadth
 * @param {Integer} depth
 * @param {*} defaultVal
 * @returns {Array}
 */

function getValue(value, fallback) {
  if (value === undefined) return fallback;

  return value;
}

function arrayShape(arr, breadth = 0, depth = 0, defaultVal = null) {
  if (!Array.isArray(arr) && typeof arr !== "string") return arr;
  if (breadth < 0 || depth < 0) return arr;

  let breadthArr = [...Array(breadth)];
  let depthArr = [...Array(depth)];

  return breadthArr.map((item, idx) => {
    let arrIdx = arr[idx];

    if (depth > 1) {
      return depthArr.map((depthItem, depthIdx) => {
        let isArr = Array.isArray(arrIdx);

        if (!isArr && depthIdx === 0) return getValue(arrIdx, defaultVal);
        if (isArr) return getValue(arrIdx[depthIdx], defaultVal);

        return defaultVal;
      });
    } else if (depth === 1) {
      if (Array.isArray(arrIdx)) return arrIdx.shift();
    }

    return getValue(arrIdx, defaultVal);
  });
}

module.exports = arrayShape;
