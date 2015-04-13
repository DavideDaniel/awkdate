var x = 100;

while (x > 0) {
	if (x % 5 === 0 && x % 3 === 0)
		console.log("FizzBuzz");
	else if (x % 3 === 0) {
		console.log("Fizz");
	}
	else if (x % 5 === 0) {
		console.log("Buzz");
	}
	else 
	{
		console.log(x);
	}
	x--;
}
