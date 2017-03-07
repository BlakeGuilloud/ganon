export function isEmptyObject(value) {
  let returnVal = false;

  if (typeof value === 'object' && !Object.keys(value).length) {
    returnVal = true;
  }

  return returnVal;
}
