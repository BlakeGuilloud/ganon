/**
 * Converts an array of hue, saturation, and value components to the red, green, blue color space.
 *
 * @param {Array} hsv An array containing the hue component [0, 360) of the color in its 0th index,
 *                    saturation component [0, 1] in its 1st index, and the value [0, 1] in its 3rd index.
 *
 * @return {Array} An array containing the red component of the color in its 0th index, the blue green component
 *                    in its 1st index, and the red component in its 2nd index.
 *                    Each value should be an integer in the range [0, 255].
 */
function hsv2rgb(hsv) {
  let h = hsv[0] / 360, s = hsv[1], v = hsv[2];
  let r, g, b;

  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);

  switch (i % 6) {
  case 0: r = v, g = t, b = p; break;
  case 1: r = q, g = v, b = p; break;
  case 2: r = p, g = v, b = t; break;
  case 3: r = p, g = q, b = v; break;
  case 4: r = t, g = p, b = v; break;
  case 5: r = v, g = p, b = q; break;
  }

  return [ Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

module.exports = hsv2rgb;
