/**
 * Returns a reversed map based on the original map parameter. The values of
 * original map become the keys of the reversed map.
 *
 * Original map             | Reversed map
 * key1 -> value1           | value1 -> key1
 * Map.get(key1) === value2 | Map.get(value1) === key1
 *
 * @param {Map} map - The original map.
 * @return {Map} The reversed map.
 */
function reverseMap(map) {
  const reversedMap = new Map();
  for (let [key, value] of map.entries()) {
    reversedMap.set(value, key);
  }
  return reversedMap;
}

module.exports = reverseMap;
