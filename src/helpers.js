import responses from './responses';

export function isEmptyObject(value) {
  let returnVal = false;

  if (typeof value === 'object' && !Object.keys(value).length) {
    returnVal = true;
  }

  return returnVal;
}

export function invalidRequest(prop, value) {
  return { success: false, message: `Please provide a "${prop}" property for every prop. (${value})` };
}

export function isRequired(object) {
  const returnVal = object && !object.value && object.required;

  return returnVal;
}

export function getResponse(object, key) {
  const returnVal = {
    message: object.message || responses[key],
  };

  return returnVal;
}
