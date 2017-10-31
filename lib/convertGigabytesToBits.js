/**
 * Converts gigabytes to bits
 * @param {number} gigabytes
 * @return {number} bits
 */
function convertGigabytesToBits(gigabytes) {
  if (typeof gigabytes != "number" || gigabytes < 0) {
    throw new Error("Argument must be a positive number");
  }

  const GIGABYTES_TO_BITS = 1024 * 1024 * 1024 * 8;
  return gigabytes * GIGABYTES_TO_BITS;
}

module.exports = convertGigabytesToBits;
