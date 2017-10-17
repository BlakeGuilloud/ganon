
function prime(x) {
  if (x<4) {return true}
  for (i = Math.floor(x/2); i>1; i--) {
    if (x%i===0) {return false}
  }
  return true;
}

module.exports = prime;