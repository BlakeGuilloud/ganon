// Write a function that determines if an integer is prime

function prime(x) {
  // Your code goes here

    var isPrime = true;
    for(var i=2;i<x/2;i++){
        if (x%i === 0){
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

module.exports = prime;