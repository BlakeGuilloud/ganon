/**
 * Performs a linear interpolation between the first two parameters.
 * @param {Number} from First parameter.
 * @param {Number} to Second parameter.
 * @param {Number} amount A value that linearly interpolates between the to parameter and the from parameter.
 */

function lerp(from, to, amount) {
    return from + amount * (to - from);
}

module.exports = lerp;

