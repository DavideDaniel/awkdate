var string = process.argv[2];
var slen = string.length - 1; 
var z = "";

	while (slen >= 0) {
		var end = string.charAt(slen);
			z += end;
			slen--;
		}

console.log(z);