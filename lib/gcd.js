// Write a function that returns the greatest common divisor of 2 integers
function gcd(a, b) {
    if(a===0) throw "0 doesn't have any divisor"
    if(b===0) return a;
    return gcd(b,a%b);
}

module.exports = gcd;