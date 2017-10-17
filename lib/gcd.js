// Write a function that returns the greatest common divisor of 2 integers
function gcd(a, b){
	//your code here
	while(b%a !=0){
		r=b%a;
		b=a;
		a=r;
	}
	return a;
}

module.exports = gcd;