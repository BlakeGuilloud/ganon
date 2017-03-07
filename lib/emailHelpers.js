"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchEmail = matchEmail;
exports.matchEmailRegex = matchEmailRegex;
function matchEmail(object) {
  var returnVal = object && object.value && matchEmailRegex(object.value);

  return returnVal;
}

function matchEmailRegex(value) {
  return !value.match(/.+?@.+?\..+?/i);
}