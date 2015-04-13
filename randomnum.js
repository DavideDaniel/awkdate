var input = parseInt(process.argv[2]);
var randnum = Math.floor(Math.random()*(5 - 1 + 1)+1);

	if (input === randnum) {
		console.log("Success!");
	}
	else {
		console.log("Sorry, we were looking for " + randnum)
	}