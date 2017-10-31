/**
 * Extract a list of object values at given key
 *
 * @param {String} email
 * @return bool array of object values at given key
 *
 * @example
 * isEmail("test@example.com")                      // -> true
 * isEmail("testexample.com")                       // -> false
 */
function isEmail(email) {
  if (typeof email !== "string") {
    throw new Error("Invalid Type");
  }
  let matches = email.match(/[a-z]([a-z0-9._%+-]+)?@[a-z]([a-z0-9.-]+)?\.[a-z]{2,5}/i);
  return matches !== null && matches.length > 0;
}

module.exports = isEmail;
