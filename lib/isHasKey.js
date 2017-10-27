/**
 *  Write a function that returns true if input dict has input key
 * @param {{}} dict
 * @param {any} key
 * @return {boolean}
 */
function isHasKey(dict, key){
  if(!dict || typeof dict != "object" || !key || typeof key == "object"){
    throw new Error("Invalid Argument");
  }
  return dict.hasOwnProperty(key);
}

module.exports = isHasKey;