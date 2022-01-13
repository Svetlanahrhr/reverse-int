
module.exports = reverse;

function reverse (n) {
	let digits = "";
	let str = String(n);
	for (let i = 0; i < str.length; i++) {
		if (str[i].search(/[0-9]/) === 0) {
			digits += str[i];
		}
	}
	console.log(digits);
	return digits.split('').reverse().join('');
	
}
