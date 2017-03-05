'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _responses = require('./responses');

var _responses2 = _interopRequireDefault(_responses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ganon = function Ganon(opts) {
  var returnVal = {};

  if (opts && (0, _keys2.default)(opts).length) {
    returnVal = validate(opts);
  }

  return returnVal;
};

function initialize(opts) {
  var returnVal = validate(opts);

  return (0, _extends3.default)({}, returnVal);
}

function validate(opts) {
  var returnVal = { success: true };

  for (var prop in opts) {
    // if no type is provided, we cant run evaluations, return an invalid request object.
    if (!opts[prop].type) {
      var invalidRequest = { success: false, message: 'Please provide a "type" property for every prop.' };

      return invalidRequest;
    }

    // evaluate the type provided, and declare the function to be run during this check.
    var func = eval(opts[prop].type);

    // set the return val[prop] equal to the requested validation function.
    returnVal[prop] = func(opts[prop], prop);

    // if there is no property on the return, delete it entirely.
    if (!returnVal[prop]) {
      delete returnVal[prop];
    }
  }

  return returnVal;
}

function isRequired(object) {
  var returnVal = object && !object.value && object.required ? true : false;

  return returnVal;
}

function matchPhone(object) {
  var returnVal = object && object.value && !object.value.match(/^\+1[0-9]{10}$/);

  return returnVal;
}

function phone(object, prop) {
  var returnVal = void 0;

  var conditional = isRequired(object) || matchPhone(object);

  if (conditional) {
    returnVal = _responses2.default[prop];
  }

  return returnVal;
}

function matchEmail(object) {
  var returnVal = object && object.value && !object.value.match(/.+?@.+?\..+?/i);

  return returnVal;
}

function email(object, prop) {
  var returnVal = void 0;

  var conditional = isRequired(object) || matchEmail(object);

  if (conditional) {
    returnVal = _responses2.default[prop];
  }

  return returnVal;
}

function input(object, prop) {
  var returnVal = void 0;

  var conditional = isRequired(object);

  if (conditional) {
    returnVal = _responses2.default[prop];
  }

  return returnVal;
}

module.exports = Ganon;