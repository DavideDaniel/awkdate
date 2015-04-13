var string = process.argv[2];
var vowel = ["a", "e", "i", "o", "u"];
var vp = 0;
var check = 0;

	while (check < string.length) {
		var v = string.charAt(check);
		while (v < 5) {
			if (v === vowel[vp]) {
				console.log(v);
			}
				else {
					vp++;
				}
			} 
		check++;
	}
