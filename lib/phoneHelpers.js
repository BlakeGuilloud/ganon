'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchPhone = matchPhone;
exports.checkPhoneRegex = checkPhoneRegex;
exports.stripPhone = stripPhone;
function matchPhone(object) {
  var returnVal = object && object.value && checkPhoneRegex(object.value);

  return returnVal;
}

function checkPhoneRegex(value) {
  var newValue = stripPhone(value);

  return !newValue.match(/^\+1[0-9]{10}$/);
}

function stripPhone(value) {
  var returnVal = value.replace(/[^0-9]/g, '');

  if (returnVal[0] === '1') {
    returnVal = '+' + returnVal;
  } else {
    returnVal = '+1' + returnVal;
  }

  return returnVal;
}