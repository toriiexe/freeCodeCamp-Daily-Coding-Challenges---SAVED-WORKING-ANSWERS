// JavaScript solution for 2025-11-07
// Counting Cards
function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
}

function combinations(cards) {
	return factorial(52) / (factorial(cards) * factorial(52 - cards));
}