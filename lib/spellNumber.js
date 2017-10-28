/**
 * A function which spells the number for the given input
 * a given array or object is empty
 * @param Number
 * @returns Boolean
 *
 * Examples:
 *  spellNumber(123) returns one hundred twenty three
 *  spellNumber(123.23) returns one hundred twenty three
 *  spellNumber(123.55) returns one hundred twenty three
 *  spellNumber(123.56) returns one hundred twenty four
 *  spellNumber('123') throws error, with message 'invalid number'
 *  spellNumber('') throws error, with message 'invalid number'
 *  spellNumber([]) throws error, with message 'invalid number'
 *  spellNumber({}) throws error, with message 'invalid number'
 *  spellNumber([123]) throws error, with message 'invalid number'
 *  spellNumber({k:v}) throws error, with message 'invalid number'
 */
export function spellNumber(value) {
  throw new Error("Method is still a skeleton");
}

module.exports = spellNumber;