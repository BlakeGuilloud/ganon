'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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
    returnVal = initialize(opts);
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
    if (!opts[prop].type) {
      return invalidRequest('type', prop);
    }

    returnVal[prop] = evaluateProp(opts, prop);

    if (!returnVal[prop]) {
      delete returnVal[prop];
    } else if (isEmptyObject(returnVal[prop])) {
      delete returnVal[prop];
    }
  }

  return returnVal;
}

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

function evaluateProp(opts, prop) {
  var func = eval(opts[prop].type);
  console.log('func', func);
  var returnVal = func ? func(opts[prop], prop) : null;

  return returnVal;
}

function isRequired(object) {
  var returnVal = object && !object.value && object.required;

  return returnVal;
}

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

function matchEmail(object) {
  var returnVal = object && object.value && matchEmailRegex(object.value);

  return returnVal;
}

function matchEmailRegex(value) {
  return !value.match(/.+?@.+?\..+?/i);
}

function phone(object) {
  var returnVal = {};

  for (var i = 0; i < object.value.length; i++) {
    var key = object.value[i];

    var conditional = isRequired(key) || matchPhone(key);

    if (conditional) {
      returnVal['userPhones-' + i] = _responses2.default[object.type];
    }
  }

  return returnVal;
}

function email(object) {
  var returnVal = {};

  for (var i = 0; i < object.value.length; i++) {
    var key = object.value[i];

    var conditional = isRequired(key) || matchEmail(key);

    if (conditional) {
      returnVal['userEmails-' + i] = _responses2.default[object.type];
    }
  }

  return returnVal;
}

function birthday(object, prop) {
  var returnVal = void 0;

  return returnVal;
}

function location(object, prop) {
  var returnVal = void 0;

  return returnVal;
}

function string(object, prop) {
  var returnVal = void 0;

  var conditional = isRequired(object);

  if (conditional) {
    returnVal = _responses2.default[prop];
  }

  return returnVal;
}

module.exports = Ganon;