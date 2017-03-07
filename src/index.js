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
      return {
        success: false,
        message: 'Please provide a "type" property for every prop.',
      };
    }

    const func = setFunction(opts[prop]);

    returnVal[prop] = func ? func(opts[prop], prop) : null;
    console.log('return val', returnVal);
    if (!returnVal[prop]) {
      delete returnVal[prop];
    }
  }

  return returnVal;
}

function setFunction(object) {
  let returnVal;

  if (typeof object.value === 'array') {
    returnVal = object.value[0] ? eval(object.value[0].type) : null;
  } else {
    returnVal = eval(object.type);
  }

  return returnVal;
}

function isRequired(object) {
  const returnVal = object && !object.value && object.required;

  return returnVal;
}

function matchPhone(object) {
  const returnVal = object && object.value && !object.value.match(/^\+1[0-9]{10}$/) ? true : false;

  return returnVal;
}

function matchEmail(object) {
  const returnVal = object && object.value && !object.value.match(/.+?@.+?\..+?/i);

  return returnVal;
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

function input(object, prop) {
  let returnVal;

  const conditional = isRequired(object);

  if (conditional) {
    returnVal = responses[prop];
  }

  return returnVal;
}

module.exports = Ganon;
