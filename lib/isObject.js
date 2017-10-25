function isObject(object) {
  const type = typeof object;

  return !!object && type === "object" && !object.hasOwnProperty("length");
}

module.exports = isObject;