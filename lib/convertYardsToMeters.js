/**
 * Convert yards to meters where 1 yard equals 0.9144 meters
 * @param {number} yards
 * @return returned value in meters
 */

function convertYardsToMeters(yards) {
  if (typeof yards != "number")
    throw new Error("Invalid Type");
  return yards * 0.9144;
}

module.exports = convertYardsToMeters;
