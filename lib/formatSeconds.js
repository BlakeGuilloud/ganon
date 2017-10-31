/**
 * Formats seconds to HH:MM:SS
 * @param {number} seconds
 * @return {string} time_string
 */
function formatSeconds(seconds) {
  if(Number.isInteger(seconds) && seconds >= 0){
    var h = Math.floor(seconds / 3600);
    h = h < 10 ? "0" + h : h;
    seconds %= 3600;
    var m = Math.floor(seconds / 60);
    m = m < 10 ? "0" + m : m;
    seconds = seconds % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${h}:${m}:${seconds}`;
  }
  else{
    throw "Not a valid positive number";
  }
}

module.exports = formatSeconds;
