// Write a function that returns a number representing the largest integer less than or equal to the specified number.
// Parameter A is a number.
function floor(a) {
	if (a < 0)
		a -= 1
	return a - (a % 1) 	// Thanks to the guys who proposed this solution:
				              // https://stackoverflow.com/questions/5122993/floor-int-function-implementaton
}

module.exports = floor;