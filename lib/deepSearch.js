/**
 * Search through an object/array and return a list of all objects that match the
 * test function
 * @param {Object/Array} input
 * @param {function} test function
 * @return {Array} list of all objects that match the test. Order not important
 */

function deepSearch(input, test) {
  if (!input || !test) return () => { throw new Error("Please provide arguments"); };
  else if (typeof(input) !== "object" || typeof(test) !== "function") return () => { throw new Error("Please provide an array or an object and a function as the two arguments."); };


  const results = [];
  var dataQueue = [input];

  while(dataQueue.length){
    const isObj = dataQueue.shift();

    if (Array.isArray(isObj)) {
      isObj.forEach(element => {
        dataQueue.push(element);
      });
    }

    else if (!Array.isArray(isObj) && typeof(isObj) === "object"){
      if (test(isObj)) results.push(isObj);

      for (var key in isObj){
        dataQueue.push(isObj[key]);
      }

    }
  }

  return results;

}

module.exports = deepSearch;
