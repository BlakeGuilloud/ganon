'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

exports.isEmptyObject = isEmptyObject;
exports.invalidRequest = invalidRequest;
exports.isRequired = isRequired;
exports.getResponse = getResponse;

var _responses = require('./responses');

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmptyObject(value) {
  var returnVal = false;

  if ((typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object' && !(0, _keys2.default)(value).length) {
    returnVal = true;
  }

  return returnVal;
}

function invalidRequest(prop, value) {
  return { success: false, message: 'Please provide a "' + prop + '" property for every prop. (' + value + ')' };
}

function isRequired(object) {
  var returnVal = object && !object.value && object.required;

  return returnVal;
}

function getResponse(object) {
  var returnVal = {
    message: object.message || _responses2.default[object.type]
  };

  return returnVal;
}