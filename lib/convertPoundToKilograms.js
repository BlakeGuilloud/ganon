/** convert the given weight in pounds to kilograms to precision upto 3 significant digits
 * @parma{number} Pound - weight in Pounds
 * @return{number} Kilograms -returns weight in Kilograms
 */
function convertPoundToKilograms(weight) {
  if (typeof weight === "number" && weight >= 0) {
    return Number((weight * 0.4535).toPrecision(3));
  }
  else {
    throw("invalid type");
  }
}

module.exports = convertPoundToKilograms;
