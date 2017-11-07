/**
 * Returns the most used character from a string
 * @param {string} str
 * @return {Array}
 */

function mostFrequentChars(str) {
  if (typeof str !== "string") { throw TypeError("Invalid Type"); }
  const frequentChars = [...str].reduce(({ biggestSum, ...obj }, value) =>
    ({
      ...obj,
      [value]: (obj[value] || 0) + 1,
      biggestSum: Math.max((obj[value] || 0) + 1, biggestSum)
    }), { biggestSum: -Infinity });
  return Object.keys(frequentChars).filter(key =>
    frequentChars[key] === frequentChars.biggestSum && key !== "biggestSum");
}

module.exports = mostFrequentChars;
