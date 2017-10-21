const flattenArray = require("./flattenArray");
const getKeyValuePairs = require("./getKeyValuePairs");
const hasNestedProperties = require("./hasNestedProperties");
const isObject = require("./isObject");

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

function toObject(acc, { key, value }) {
  acc[key] = value;

  return acc;
}

module.exports = flattenNestedObject;
