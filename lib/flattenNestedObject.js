const flattenArray = require("./flattenArray");

// Write function which takes a nested object and flattens it
//
// flattenNestedObject({ "a" : 1, "b" : { "c" : { "d" : { "e" : 1, "f" : 2 } } } }, '-') => {a: 1, "b-c-d-e": 1, "b-c-d-f": 2}
// flattenNestedObject({ "a" : 1, "b" : { "c" : { "d" : { "e" : 1, "f" : 2 } } } }) => {a: 1, "b.c.d.e": 1, "b.c.d.f": 2}

function flattenNestedObject(object, delimiter = ".") {
  if (!isObject(object)) {
    throw new Error("First parameter must be an object");
  }

  if (!hasNestedProperties(object)) {
    return object;
  }

  return getKeyValuePairs(object, delimiter).reduce(toObject, {});
}

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

function isObject(object) {
  const type = typeof object;

  return !!object && type === "object" && !object.length;
}

function hasNestedProperties(object) {
  return Object.keys(object).filter(key => isObject(object[key])).length > 0;
}

function toObject(acc, { key, value }) {
  acc[key] = value;

  return acc;
}

module.exports = flattenNestedObject;
