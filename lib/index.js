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
      return {
        success: false,
        message: 'Please provide a "type" property for every prop.'
      };
    }

    var func = setFunction(opts[prop]);

    returnVal[prop] = func ? func(opts[prop], prop) : null;
    console.log('return val', returnVal);
    if (!returnVal[prop]) {
      delete returnVal[prop];
    }
  }

  return returnVal;
}

function setFunction(object) {
  var returnVal = void 0;

  if (typeof object.value === 'array') {
    returnVal = object.value[0] ? eval(object.value[0].type) : null;
  } else {
    returnVal = eval(object.type);
  }

  return returnVal;
}

function isRequired(object) {
  var returnVal = object && !object.value && object.required;

  return returnVal;
}

function matchPhone(object) {
  console.log('object', object.value);
  console.log(object.value.match(/^\+1[0-9]{10}$/));
  var returnVal = object && object.value && !object.value.match(/^\+1[0-9]{10}$/) ? true : false;

  return returnVal;
}

function matchEmail(object) {
  var returnVal = object && object.value && !object.value.match(/.+?@.+?\..+?/i);

  return returnVal;
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

function input(object, prop) {
  var returnVal = void 0;

  var conditional = isRequired(object);

  if (conditional) {
    returnVal = _responses2.default[prop];
  }

  return returnVal;
}

module.exports = Ganon;