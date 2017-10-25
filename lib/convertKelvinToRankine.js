/**
 * convert temperature in Kelvin to Rankine
 * @param {number} rankine - temperature expressed in Rankine
 * @return {number} a temperature expressed in Kelvins
 */

function convertKelvinToRankine(kelvin) {
  if (typeof(kelvin) === "number" && kelvin >= 0){
    if(kelvin === 0)return 0;
    return kelvin * 1.8;
  }
  throw new Error("Invalid Type");
}
module.exports = convertKelvinToRankine;
