/**
 * Calculates BMI, to one decimal, given height in inches and weight in pounds
 * @param {number} height in inches
 * @param {number} weight in pounds
 * @return returned BMI value, to one decimal
 */

function calculateBMI(height, weight) {
  if(typeof(height) !== "number" || typeof(weight) !== "number"){
    throw new Error("Height or weight is not a number.");
  }
  if(height < 0 || weight < 0){
    throw new Error("Height or weight is negative.");
  }

  var number = (weight / (height * height)) * 703;

  return parseFloat(number.toFixed(1));
}

module.exports = calculateBMI;
