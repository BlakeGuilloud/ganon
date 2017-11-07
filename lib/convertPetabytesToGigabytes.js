/**
 * Converts Petabytes to Gigabytes
 *
 * @param {Number} Number of Gigabytes.
 * @returns {Number} Converted Petabytes to Gigabytes.
 */

function convertPetabytesToGigabytes(petabytes) {
  if(typeof(petabytes) !== "number"){
    throw new Error("Argument is not a number!");
  }

  return petabytes * 1000000;
}

module.exports = convertPetabytesToGigabytes;
