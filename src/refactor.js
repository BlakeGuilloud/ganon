const Ganon = (opts) => {
  if (!opts || typeof opts !== 'object' || !Object.keys(opts).length) {
    return {};
  }

  return initialize(opts);
}

function initialize(opts) {
  const returnVal = {};

  Object.keys(opts).forEach((key) => {
    const item = opts[key];

    returnVal[key] = validate(item, key);
  });

  return returnVal;
}

function validate(item, key) {
  let returnVal;

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

  let returnVal;

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

const responses = {
  firstName: 'First name is required',
  lastName: 'Last name is required',
  loginEmail: 'Email address is required',
}

module.exports = Ganon;
