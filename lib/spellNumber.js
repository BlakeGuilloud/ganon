/**
 * A function which spells the number for the given input
 * a given array or object is empty
 * @param {Number} value
 * @returns {String}
 *
 * Examples:
 *  spellNumber(123) returns one hundred twenty three
 *  spellNumber(123.23) returns one hundred twenty three
 *  spellNumber(123.49) returns one hundred twenty three
 *  spellNumber(123.56) returns one hundred twenty four
 *  spellNumber('123') throws error, with message 'invalid number'
 *  spellNumber('') throws error, with message 'invalid number'
 *  spellNumber([]) throws error, with message 'invalid number'
 *  spellNumber({}) throws error, with message 'invalid number'
 *  spellNumber([123]) throws error, with message 'invalid number'
 *  spellNumber({k:v}) throws error, with message 'invalid number'
 */
export function spellNumber(value) {
  if (typeof value !== "number"){
    throw new Error("invalid number");
  }
  const suffixes = ["", "thousand", "million", "trillion", "quadrillion", "quintillion", "sextillion"];
  const beforeTwenty = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tenths = ["", "twenty", "thirty", "forty", "fifty", "sixty", "six", "seven", "eight", "nine"];
  const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let spelledNumber = "";
  value = Math.round(value);
  if (value === 0) return "zero";
  for (let s = 0; s < 7 && value > 0; s++) {
    let spelledFragment = "";
    let rem = value % 1000;
    value = Math.floor(value / 1000);
    if (rem < 20 && rem > 9) {
      spelledFragment += beforeTwenty[rem % 10];
    } else {
      let addSuffix = rem > 0;
      let c = Math.floor(rem / 100);
      rem %= 100;
      let d = Math.floor(rem / 10);
      rem %= 10;
      if (c > 0) {
        spelledFragment += numbers[c - 1] + " hundred ";
      }
      if (d > 0) {
        spelledFragment += tenths[d - 1] + " ";
      }
      if (rem > 0) {
        spelledFragment += numbers[rem - 1] + " ";
      }
      if (addSuffix) {
        spelledFragment += suffixes[s];
      }
    }
    spelledNumber = spelledFragment + " " + spelledNumber;
  }
  return spelledNumber.trim();
}

module.exports = spellNumber;
