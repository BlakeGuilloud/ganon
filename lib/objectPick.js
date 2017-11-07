/**
 * Returns an Object composed of picked object properties.
 *
 * var obj = { name: "Aaron", age: 32, cake: { cat: 12 } }
 *
 * -- Admits alien keys as undefined
 * objectPick(obj, ["name", "bing"]);
 * >> { name: "Aaron", "bing": undefined }
 *
 * -- Allows nested picks
 * objectPick(obj, ["age", ["cake",["cat"]]);
 * >> { age: 32, cake: { cat: 12 }}
 *
 * @param {Object} obj
 * @param {String|[String[]|String[String|String[]]} props
 * @return {Object}
 *
 */

const isObject = require("./isObject");

function buildObject(prop, idx, arr, obj, tempObj) {
  if (Array.isArray(arr[idx]) && arr[idx].length && (typeof arr[idx - 1] === "string" || idx === 0)) {
    tempObj[prop[0]] = {};

    if (Array.isArray(prop[1])) {
      prop[1].forEach((p, i, ar) => {
        var nestedObj = obj[prop[0]] === undefined ? {} : obj[prop[0]];

        buildObject(p, i, ar, nestedObj, tempObj[prop[0]]);
      });

    } else {
      buildObject(prop[idx + 1], 1, arr, obj[prop[0]], tempObj[prop[0]]);
    }

    return;
  }

  if (typeof prop === "string") {
    tempObj[prop] = obj[prop];
  }
}

function objectPick(obj, props) {
  if (!isObject(obj)) {
    throw "Invalid Parameter: obj must be of type Object.";
  }

  if (typeof props === "string") {
    return { [props]: obj[props] };
  } else if (Array.isArray(props)) {
    let tempObj = {};

    props.forEach((prop, idx, arr) => {
      buildObject(prop, idx, arr, obj, tempObj);
    });

    return tempObj;
  }

  return obj;
}

module.exports = objectPick;
