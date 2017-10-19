// Write a function that returns the greatest common divisor of 2 integers
function gcd(a, b) {
  let flag = 0;
  if( a < 0 && b < 0 )
    flag = 1;
  if( a === 0) throw "0 doesn't have any divisor";
  while(b != 0){
    let t = b;
    b = a % b;
    a = t;
  }
  if(flag)
    return (a * -1);
  return a;
}

module.exports = gcd;