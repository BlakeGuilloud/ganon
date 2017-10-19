// write a function that returns:
//  value replacing each letter by the letter 13 places further along in the
//  alphabet. Wrapping back to the beginning if necessary

function rot13(value) {
  return value.replace(/[A-Za-z]/g, function (c) {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(
      "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".indexOf(c)
    );
  });
}

module.exports = rot13;
