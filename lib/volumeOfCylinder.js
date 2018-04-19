"use strict";

/**
  Given radius of the base and height of a cylinder, returns the volume of a cylinder
  @param {Number} rad is the radius of the base of the cylinder
  @param {Number} height is the height of the cylinder
  */

function volumeOfCylinder(rad, height) {
  if (isFinitePositiveNumber(rad) && isFinitePositiveNumber(height)) {
    return Math.round(Math.PI * rad * rad * height);
  } else {
    throw new Error("Invalid Type");
  }
}

function isFinitePositiveNumber(val) {
  if (typeof val == "number" && val > 0 && Number.isFinite(val)) {
    return true;
  }
  return false;
}

module.exports = volumeOfCylinder;