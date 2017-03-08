'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _responses = require('./responses');

var _responses2 = _interopRequireDefault(_responses);

var _helpers = require('./helpers');

var _phoneHelpers = require('./phoneHelpers');

var _emailHelpers = require('./emailHelpers');

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
  var returnVal = {};

  for (var prop in opts) {
    if (!opts[prop].type) {
      return (0, _helpers.invalidRequest)('type', prop);
    }

    returnVal[prop] = evaluateProp(opts, prop);

    if (!returnVal[prop]) {
      delete returnVal[prop];
    } else if ((0, _helpers.isEmptyObject)(returnVal[prop])) {
      delete returnVal[prop];
    }
  }

  return returnVal;
}

function evaluateProp(opts, prop) {
  var func = eval(opts[prop].type);

  var returnVal = func ? func(opts[prop], prop) : null;

  return returnVal;
}

function phone(object) {
  var returnVal = {};

  for (var i = 0; i < object.value.length; i++) {
    var key = object.value[i];

    var conditional = (0, _helpers.isRequired)(key) || (0, _phoneHelpers.matchPhone)(key);

    if (conditional) {
      returnVal['userPhones-' + i] = _responses2.default[object.type];
    }
  }

  return returnVal;
}

function loginEmail(object, prop) {
  console.log('we in here?', object, prop);
  var returnVal = void 0;

  var conditional = (0, _helpers.isRequired)(object) || (0, _emailHelpers.matchEmail)(object);
  console.log('conditional', conditional);

  if (conditional) {
    returnVal = _responses2.default[prop];
  }

  return returnVal;
}

function email(object) {
  var returnVal = {};

  for (var i = 0; i < object.value.length; i++) {
    var key = object.value[i];

    var conditional = (0, _helpers.isRequired)(key) || (0, _emailHelpers.matchEmail)(key);

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

  var conditional = object.required && !object.value.length;

  if (conditional) {
    returnVal = 'Locations are required';
  }

  return returnVal;
}

function string(object, prop) {
  var returnVal = void 0;

  var conditional = (0, _helpers.isRequired)(object);

  if (conditional) {
    returnVal = _responses2.default[prop];
  }

  return returnVal;
}

module.exports = Ganon;