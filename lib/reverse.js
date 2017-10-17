// Write a number that accepts on parameter and returns the reverse of it. (String or Integer)

function reverse(value) {
  switch(typeof value) {
  case 'string':
    return value.split('').reverse().join('');
    break;
  case 'number':
    return Number(value.toString().split('').reverse().join(''));
    break;
  default:
    throw new Error('Type noy allowed');
  }
}

module.exports = reverse;