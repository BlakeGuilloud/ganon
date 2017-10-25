/**
 * A function that returns true when the two input values are anagrams
 * For further details: https://en.wikipedia.org/wiki/Anagram
 * @param value1: First string or array
 * @param value2: Second string or array
 */
function isAnagram(value1, value2) {
  return uncountMap(createCountMap(value1), value2);
}

function createCountMap(value) {
  let counts = new Map();

  Array.from(value)
    .filter(key => key !== " ")
    .map(key => (typeof key === "string") ? key.toLowerCase() : key)
    .forEach(key => {
      let count = counts.get(key) || 0;
      counts.set(key, count + 1);
    });

  return counts;
}

function uncountMap(map1, value2) {
  return Array.from(value2)
    .filter(key => key !== " ")
    .map(key => (typeof key === "string") ? key.toLowerCase() : key)
    .every(key => {
      let count = map1.get(key);
      return count != null && ((count > 1) ? map1.set(key, count - 1) : map1.delete(key));
    }) && map1.size === 0;
}

module.exports = isAnagram;
