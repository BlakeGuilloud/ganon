const Ganon = (opts) => {
  let returnVal = {};

  if (opts && Object.keys(opts).length) {
    returnVal = initialize(opts);
  }

  return returnVal;
}

function initialize(opts) {
  for (let prop in opts) {
    var dog = eval(prop)(opts[prop]);
  }

  return {
    success: true,
  };
}

function firstName(string) {
  return 'hello';
}

module.exports = Ganon;
