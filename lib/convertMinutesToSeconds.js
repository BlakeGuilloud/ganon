/**
*coverts minutes to seconds
* @param {number} Minutes - takes input for minutes
* @return {number} Seconds -returns the minutes in seconds
*/
function convertMinutesToSeconds(minutes) {
  if(typeof(minutes) === "number" && minutes >= 0){
    return minutes * 60;
  } else {
    throw new Error("invalid input");
  }
}

module.exports = convertMinutesToSeconds;