/**
 * `caesar's cipher` takes in a string and "encrypts" it by shifting the letters by a predefined amount. This function will implement a ROT13 cipher, meaning each letter will shift 13 places in the alphabet.
 *
 * Examples: A -> N
 *           B -> O
 *           C -> P
 *           Z -> M
 *           Q -> D
 *           R -> E
 *           S -> F
 *
 * @param {msg} A String to encrypt.
 * @returns {String} the encrypted message.
 */
function caesarsCipher(msg) {
  const upperCaseStartCharCode = "A".charCodeAt(0);
  const upperCaseEndCharCode = "Z".charCodeAt(0);
  const lowerCaseStartCharCode = "a".charCodeAt(0);
  const lowerCaseEndCharCode = "z".charCodeAt(0);

  const map = Array.prototype.map;
  const cryptedMessage = map.call(msg, (char) => {
    const charCode = char.charCodeAt(0);
    let cipheredChar = char;

    if (charCode >= upperCaseStartCharCode && charCode <= upperCaseEndCharCode) {
      const cipheredCode = ((charCode - upperCaseStartCharCode + 13)) % 26 + upperCaseStartCharCode;
      cipheredChar = String.fromCharCode(cipheredCode);
    } else if (charCode >= lowerCaseStartCharCode && charCode <= lowerCaseEndCharCode) {
      const cipheredCode = ((charCode - lowerCaseStartCharCode + 13)) % 26 + lowerCaseStartCharCode;
      cipheredChar = String.fromCharCode(cipheredCode);
    }

    return cipheredChar;
  }).join("");
  return cryptedMessage || "";
}

module.exports = caesarsCipher;
