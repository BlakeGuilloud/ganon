/**
 * @description Returns false for NaN, null, or undefined, and true for all others.
 * @param {*} - Any value.
 * @returns {boolean}
 */

function exists(value) {
  if(Number.isNaN(value) || value === undefined || value === null)
    return false;
  else
    return true;
}

module.exports = exists;