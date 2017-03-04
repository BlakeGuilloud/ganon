const Ganon = (opts) => {
  let returnVal = {};

  if (opts && Object.keys(opts).length) {
    returnVal = initialize(opts);
  }

  return returnVal;
}

function initialize(opts) {
  const returnVal = {};

  for (let prop in opts) {
    const cb = eval(opts[prop].type);

    returnVal[prop] = cb(prop, opts[prop]);
  }

  console.log('return val', returnVal);

  return {
    ...returnVal,
    success: true,
  };
}

function phone(prop, value) {
  return true;
}

function email(prop, value) {
  return true;
}

function input(prop, value) {
  let returnVal;

  if (!value || !value.value) {
    returnVal = 'Something went wrong';
  }

  return returnVal;
}

module.exports = Ganon;
