export function matchPhone(object) {
  const returnVal = object && object.value && checkPhoneRegex(object.value);

  return returnVal;
}

export function checkPhoneRegex(value) {
  const newValue = stripPhone(value);

  return !newValue.match(/^\+1[0-9]{10}$/);
}

export function stripPhone(value) {
  let returnVal = value.replace(/[^0-9]/g, '');

  if (returnVal[0] === '1') {
    returnVal = `+${returnVal}`;
  } else {
    returnVal = `+1${returnVal}`;
  }

  return returnVal;
}
