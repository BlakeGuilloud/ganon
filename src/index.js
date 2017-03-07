import responses from './responses';

const Ganon = (opts) => {
  let returnVal = {};

  if (opts && Object.keys(opts).length) {
    returnVal = initialize(opts);
  }

  return returnVal;
}

function initialize(opts) {
  const returnVal = validate(opts);

  return {
    ...returnVal,
  };
}

function validate(opts) {
  const returnVal = { success: true };

  for (let prop in opts) {
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
  let returnVal = false;

  if (typeof value === 'object' && !Object.keys(value).length) {
    returnVal = true;
  }

  return returnVal;
}

function invalidRequest(prop, value) {
  return { success: false, message: `Please provide a "${prop}" property for every prop. (${value})` };
}

function evaluateProp(opts, prop) {
  const func = eval(opts[prop].type);

  const returnVal = func ? func(opts[prop], prop) : null;

  return returnVal;
}

function isRequired(object) {
  const returnVal = object && !object.value && object.required;

  return returnVal;
}

function matchPhone(object) {
  const returnVal = object && object.value && checkPhoneRegex(object.value);

  return returnVal;
}

function checkPhoneRegex(value) {
  const newValue = stripPhone(value);

  return !newValue.match(/^\+1[0-9]{10}$/);
}

function stripPhone(value) {
  let returnVal = value.replace(/[^0-9]/g, '');

  if (returnVal[0] === '1') {
    returnVal = `+${returnVal}`;
  } else {
    returnVal = `+1${returnVal}`;
  }

  return returnVal;
}

function matchEmail(object) {
  const returnVal = object && object.value && matchEmailRegex(object.value);

  return returnVal;
}

function matchEmailRegex(value) {
  return !value.match(/.+?@.+?\..+?/i);
}

function phone(object) {
  let returnVal = {};

  for (let i = 0; i < object.value.length; i++) {
    const key = object.value[i];

    const conditional = isRequired(key) || matchPhone(key);

    if (conditional) {
      returnVal[`userPhones-${i}`] = responses[object.type];
    }
  }

  return returnVal;
}

function email(object) {
  let returnVal = {};

  for (let i = 0; i < object.value.length; i++) {
    const key = object.value[i];

    const conditional = isRequired(key) || matchEmail(key);

    if (conditional) {
      returnVal[`userEmails-${i}`] = responses[object.type];
    }
  }

  return returnVal;
}

function birthday(object, prop) {
  let returnVal;

  return returnVal;
}

function location(object, prop) {
  let returnVal;

  return returnVal;
}

function string(object, prop) {
  let returnVal;

  const conditional = isRequired(object);

  if (conditional) {
    returnVal = responses[prop];
  }

  return returnVal;
}

module.exports = Ganon;
