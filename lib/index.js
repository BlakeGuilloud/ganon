'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ganon = function Ganon(opts) {
  var returnVal = {};

  if (opts && (0, _keys2.default)(opts).length) {
    returnVal = initialize(opts);
  }

  return returnVal;
};

function initialize(opts) {
  var returnVal = {};

  for (var prop in opts) {
    if (!opts[prop].type) {
      return { success: false, message: 'Please provide a "type" property for every prop.' };
    }

    var cb = eval(opts[prop].type);

    returnVal[prop] = cb(opts[prop], prop);

    if (!returnVal[prop]) {
      delete returnVal[prop];
    }
  }

  return (0, _extends3.default)({}, returnVal, {
    success: true
  });
}

function phone(object, prop) {
  var returnVal = void 0;

  var conditional = !object.value && object.required || object && object.value && !object.value.match(/^\+1[0-9]{10}$/);

  if (conditional) {
    returnVal = responses[prop];
  }

  return returnVal;
}

function email(object, prop) {
  var returnVal = void 0;

  var conditional = !object && object.required || object && object.value && !object.value.match(/.+?@.+?\..+?/i);

  if (conditional) {
    returnVal = responses[prop];
  }

  return returnVal;
}

function input(object, prop) {
  var returnVal = void 0;

  var conditional = (!object || !object.value) && object.required;

  if (conditional) {
    returnVal = responses[prop];
  }

  return returnVal;
}

module.exports = Ganon;

var responses = {
  age: 'Age is required',
  firstName: 'First name is required',
  lastName: 'Last name is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number'
};