
// Write a function that checks if given string is valid JSON

function isJSON(a){
  try {
    JSON.parse(a);
  } catch(e) {
    return false;
  }
  return true;
}

module.exports = isJSON;
