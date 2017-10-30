/**
 * Convert liters to US Liquid quarts
 * @param {number} liters
 * @return returned value in US Liquid quarts
 */

function convertLitersToQuarts(liters) {
  if (typeof liters !== "number" || isNaN(liters) || !isFinite(liters)) {
    throw "argument liters must be a number";
  }

  if (liters < 0) {
    throw "cannot convert a negative number of liters";
  }

  return parseFloat((liters * 1.05669).toFixed(2));
}

module.exports = convertLitersToQuarts;
