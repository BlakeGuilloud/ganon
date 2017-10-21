const isObject = require("./isObject");

function hasNestedProperties(object) {
  return Object.keys(object).filter(key => isObject(object[key])).length > 0;
}

module.exports = hasNestedProperties;