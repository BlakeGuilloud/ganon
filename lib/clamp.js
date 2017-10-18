// write a function that returns:
//      value, if min <= value <= max
//      min,    if value < min
//      max,    if value > max

function clamp(value, min, max) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

module.exports = clamp;
