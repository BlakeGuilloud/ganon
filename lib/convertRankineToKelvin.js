/**
 * convert temperature in Rankine to Kelvin to 6 significant figures
 * @param {number} rankine - temperature expressed in Rankine
 * @return {number} a temperature expressed in Kelvins
 */

function rankineToKelvin(rankine) {
  if (typeof rankine === "number" && rankine >= 0) {
    return Number((rankine * 5 / 9).toPrecision(6));
  } else {
    throw("Invalid Type");
  }
}

module.exports = rankineToKelvin;
