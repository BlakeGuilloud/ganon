'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ganon = function Ganon(opts) {
  if (!opts || (typeof opts === 'undefined' ? 'undefined' : (0, _typeof3.default)(opts)) !== 'object' || !(0, _keys2.default)(opts).length) {
    return {};
  }

  return initialize(opts);
};

function initialize(opts) {
  var returnVal = {};

  (0, _keys2.default)(opts).forEach(function (key) {
    var item = opts[key];

    returnVal[key] = validate(item, key);
  });

  return returnVal;
}

function validate(item, key) {
  var returnVal = void 0;

  switch (item.dataType) {
    case 'string':
      returnVal = validateString(item, key);
      break;
    case 'array':
      returnVal = validateArray(item, key);
      break;
    default:
      returnVal = null;
      break;
  }

  return returnVal;
}

function validateString(item, key) {
  if (!item.value && !item.required) {
    return null;
  }

  var returnVal = void 0;

  switch (key) {
    case 'firstName':
      returnVal = validateInput(item, key);
      break;
  }

  return returnVal;
}

function validateInput(item, key) {
  if (item.value) {
    return null;
  }

  return item.message || responses[key];
}

function validateArray(item, key) {

  return 'hello';
}

var responses = {
  firstName: 'First name is required',
  lastName: 'Last name is required',
  loginEmail: 'Email address is required'
};

module.exports = Ganon;