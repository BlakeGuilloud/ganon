//converts inches to yards to two decimal places
function convertInchesToYards (inches) {
  if(!(typeof inches === "number")){
    throw new TypeError("inches must be a number");
  }
  return Math.round(inches * 100 / 36) / 100;
}

module.exports = convertInchesToYards;
