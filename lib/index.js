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
    var cb = eval(opts[prop].type);

    returnVal[prop] = cb(prop, opts[prop]);
  }

  console.log('return val', returnVal);

  return (0, _extends3.default)({}, returnVal, {
    success: true
  });
}

function phone(prop, value) {
  return true;
}

function email(prop, value) {
  return true;
}

function input(prop, value) {
  var returnVal = void 0;

  if (!value || !value.value) {
    returnVal = 'Something went wrong';
  }

  return returnVal;
}

module.exports = Ganon;