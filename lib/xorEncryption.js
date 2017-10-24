/**
 * Perform a XOR encryption on a string with a key
 * All integers passed are in the 0...255 range.
 * You can convert:
 * - from int->char with String.fromCharCode(65)
 * - from char->int with 'a'.charCodeAt(0)
 *
 * For more info: https://en.wikipedia.org/wiki/XOR_cipher
 *
 * @param {String|array} data The data to be encrypted (string or array of integer)
 * @param {String|array} key The key used to encrypt the data (string or array of integer)
 * @param {boolean?} outputAsString Whether to return an array of integer or its string value
 * @returns {String|array}
 */
function xorEncryption (data, key, outputAsString = false) {
  // TODO
}

module.exports = xorEncryption;
