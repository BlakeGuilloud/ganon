// returns the value of first parameter rounded to its nearest integer

function round(n) {
  if( Number(n) ) {
    return Math.round(n);
  }

  throw new Error( "Provided value must be a number." );
}

module.exports = round;
