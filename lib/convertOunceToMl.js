//converts ounces to milileters to two decimal places
function convertOunceToMl (ounces) {
  if (typeof ounces === "number") {
    var ml = (Math.round((ounces * 29.5735296) * 100) / 100);
    return ml;
  }
  else {
    throw "Not a number";
  }
}

module.exports = convertOunceToMl;