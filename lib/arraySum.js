function arraySum(array) {
  return array.reduce((sum, elem)=> !Number.isNaN(Number(elem)) && Number.isFinite(elem) ? sum + Number(elem) : sum,0);
}

module.exports = arraySum;
