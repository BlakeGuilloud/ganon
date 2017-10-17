// Write a function that returns the greatest common divisor of 2 integers
function gcd(a, b) {
//your code here
    
    let c = a*b;

    while (a!==b){
        if (a>b)
            a = a-b;
        if (b>a)
            b = b-a;
    }

    return a;
}

module.exports = gcd;