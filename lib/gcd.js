// Write a function that returns the greatest common divisor of 2 integers
function gcd(a, b) {

    // Helper function, recursive
  function gcd_recursive(a,b) {
    return b === 0 ? Math.abs(a) : gcd_recursive(b, a % b);
  }
    
  // Check for division by zero before calling helper function
  if(a !== 0 && b !== 0) {
    return gcd_recursive(a,b);
  } else {
    throw "Division by zero";
  }
}
module.exports = gcd;
