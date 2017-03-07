export function matchEmail(object) {
  const returnVal = object && object.value && matchEmailRegex(object.value);

  return returnVal;
}

export function matchEmailRegex(value) {
  return !value.match(/.+?@.+?\..+?/i);
}
