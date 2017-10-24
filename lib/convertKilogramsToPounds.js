/**
* Convert kilograms to pounds where 1 kilogram equals 2.204 pounds
* @param {number} kilogram
* @return returned value in pounds
*/

function convertKilogramsToPounds(kilogram) {
  if (typeof(kilogram) != "number" || !kilogram)
    throw new Error("Input must be a number");

  if (kilogram < 0)
    throw new Error("Input must be non-negative.");
  return kilogram * 2.204;
}

module.exports = convertKilogramsToPounds;
