/**
 * Accepts a red, blue, and green component of a color in RGB space and return
 * the same color represented by its hue, saturation, and value.
 *
 * @param {Array} An array containing the red component of the color in its 0th
 *                index, the blue green componenet in its 1st index, and the
 *                red component in its 2nd index. ex: [150, 50, 50]
 *
 * @return {Array} An array containing the hue component of the color in its
 *                 0th index, saturation component in its 1st index, and the
 *                 value in its 3rd index. The hue should be rounded to the
 *                 nearest integer, and the saturation and value components
 *                 should be rounded to 3 decimal places.
 *                 ex: rgb2hsv([160, 110, 250]) returns [261, .56, .98]
 */
function rgb2hsv(rgb) {
  const percents = rgb.map(v => v / 255);
  const cMax = percents.reduce((max,cur) => Math.max(max,cur));
  const cMin = percents.reduce((min, cur) => Math.min(min, cur));

  let h;
  let v = +cMax.toFixed(3);
  let s = (cMax === 0 ? 0 : +( (cMax - cMin) / cMax).toFixed(3) );

  switch(cMax) {
  case percents[0] : h = 60 * ( ((percents[1] - percents[2]) / (cMax - cMin)) % 6); break;
  case percents[1] : h = 60 * ( ((percents[2] - percents[0]) / (cMax - cMin)) + 2); break;
  case percents[2] : h = 60 * ( ((percents[0] - percents[1]) / (cMax - cMin)) + 4); break;
  }

  if (cMax - cMin === 0) {h = 0;}

  h = Math.round(h);
  if (s - Math.floor(s) === 0) {s = Math.floor(s);}
  if (v - Math.floor(v) === 0) {v = Math.floor(v);}

  return [h, s, v];
}

module.exports = rgb2hsv;
