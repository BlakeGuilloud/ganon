/**
 * Write a function that takes 2 numbers as arguments
 * and returns the smallest positive number that is a multiple of two numbers.
*/

function lcm(a, b){
	if(!b)
	{
		if(typeof a == 'number')
			return a;
		else
			return 0;
	}
	if(!(typeof a == 'number') || !(typeof b == 'number'))
		return 0;
	var smaller = a>b?b:a;
	var bigger = a<b?b:a;
	var max_limit = smaller * bigger;
	var index = bigger;
	while(index <= max_limit)
	{
		if(index % smaller == 0 && index % bigger == 0)
		{
			return index;
		}
		index += bigger;
	}
	return max_limit;
}

module.exports = lcm;
