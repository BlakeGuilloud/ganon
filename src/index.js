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
    // if no type is provided, we cant run evaluations, return an invalid request object.
    if (!opts[prop].type) {
      const invalidRequest = { success: false, message: 'Please provide a "type" property for every prop.' };

      return invalidRequest;
    }

    // evaluate the type provided, and declare the function to be run during this check.
    const func = eval(opts[prop].type);

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
  const returnVal = object && !object.value && object.required ? true : false;

  return returnVal;
}

function matchPhone(object) {
  const returnVal = object && object.value && !object.value.match(/^\+1[0-9]{10}$/);

  return returnVal;
}

function phone(object, prop) {
  let returnVal;

  const conditional = isRequired(object) || matchPhone(object);

  if (conditional) {
    returnVal = responses[prop];
  }

  return returnVal;
}

function matchEmail(object) {
  const returnVal = object && object.value && !object.value.match(/.+?@.+?\..+?/i);

  return returnVal;
}

function email(object, prop) {
  let returnVal;

  const conditional = isRequired(object) || matchEmail(object);

  if (conditional) {
    returnVal = responses[prop];
  }

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
