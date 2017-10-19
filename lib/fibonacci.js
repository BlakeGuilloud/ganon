function fibonacci(num){
  if(num >= 0){
    if(num <= 73){ // Any number after 73 would produce integers with more than 15 digits
        var a = 1; // which aren't precise in JavaScript. That would require a totally
        var b = 0; // different approach for really big numbers, maybe using strings

        for (var i = 0; i < num - 1; i++){
            var temp = a;
            a = a + b;
            b = temp;
        }
    return a;
    }
    else {
        throw new Error('Solution overflows JavaScript integer');
    }
  } else {
    throw new Error('Index cannot be negative');
  }
}

module.exports = fibonacci;
