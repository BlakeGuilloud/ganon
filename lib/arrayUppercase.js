/**
 * [arrayUppercase description]
 * @param array: An array of strings
 * @return Array of uppercase strings
 */
function arrayUppercase(arr) {
  if (!Array.isArray(arr)) throw new Error("Array argument is not an array");
  if (arr.length === 0) return [];
  let upperCastArray = [];
  for (let key in arr) {
    if (typeof arr[key] !== "string") throw new Error("Array argument can only contain strings");
    upperCastArray[key] = arr[key].toUpperCase();
  }
  return upperCastArray;
}

module.exports = arrayUppercase;
