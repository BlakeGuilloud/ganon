const flattenArray = require("./flattenArray");
const isObject = require("./isObject");

function getKeyValuePairs(object, delimiter, prefix = "") {
  return flattenArray(
    Object.keys(object)
      .map(key => {
        const value = object[key];

        return isObject(value)
          ? getKeyValuePairs(value, delimiter, `${prefix}${key}${delimiter}`)
          : { key: `${prefix}${key}`, value };
      })
  );
}

module.exports = getKeyValuePairs;