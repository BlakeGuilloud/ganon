function isObject(object) {
  const type = typeof object;

  return !!object && type === "object" && !object.length;
}

module.exports = isObject;