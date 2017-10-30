/**
 * Convert kilowatts to horsepower
 * @param {number} kilowatt
 * @return returned value in horsepower
 */

function convertKilowattsToHorsepower(kilowatt) {
  if(typeof kilowatt != "number" || kilowatt < 0) {
    throw new Error("Paramter must be a number.");
  }
  return kilowatt * 1.341;
}

module.exports = convertKilowattsToHorsepower;
