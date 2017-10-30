/**
 * Convert kilowatts to horsepower
 * @param {number} kilowatt
 * @return returned value in horsepower
 */
const var horseP = 0.745699872;
function convertKilowattsToHorsepower(kilowatt) {
  horsePower = kilowatt / horseP;
  return horsePower;
  
}

module.exports = convertKilowattsToHorsepower;
