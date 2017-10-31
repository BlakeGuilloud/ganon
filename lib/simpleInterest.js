/**
 *  Write a function that returns the simple interest with principal_amount, rate and time as input.
 * @param {Number} principal_amount
 * @param {Number} rate
 * @param {Number} time
 * @return {Number} possibly a floating point value.
 */
function simpleInterest (principal_amount, rate,time) {
  if (principal_amount<=0 ||time <= 0 || rate <= 0 || typeof rate !== "number" || Number.isNaN(rate) || !Number.isFinite(rate) || typeof time !== "number" || Number.isNaN(time) || !Number.isFinite(time)  || typeof principal_amount !== "number" || Number.isNaN(principal_amount) || !Number.isFinite(principal_amount)) {
    throw new Error("Simple Interest will be zero. Enter valid input values");
  }

  return (principal_amount*rate*time)/100;
}

module.exports = simpleInterest;
