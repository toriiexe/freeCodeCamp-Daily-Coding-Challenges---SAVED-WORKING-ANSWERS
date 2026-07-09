// JavaScript solution for 2025-10-01
// Binary to Decimal
function toDecimal(binary) {
	let s = 0;

	for (const [i, b] of binary.split("").reverse().entries()) {
		s += Number(b) * Math.pow(2, i);
	}

	return s;
}

/*
// Binary to Decimal - SHORTER VERSION
function toDecimal(binary) {
    return parseInt(binary, 2);
}
*/