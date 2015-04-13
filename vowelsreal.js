var string = process.argv[2];
var v = 0;
var newv= "";

	while (v < string.length) {
		var vow = string.charAt(v);
		v++;
		if (vow === "a" || vow === "e" || vow === "i" || vow === "o" || vow === "u") {
			console.log(vow);
			newv += vow
			}
	}
console.log(newv)