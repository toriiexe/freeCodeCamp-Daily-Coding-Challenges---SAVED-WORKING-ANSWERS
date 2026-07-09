// JavaScript solution for 2025-10-02
// Decimal to Binary
function toBinary(decimal) {
	if (decimal === 0) return '0';

	let res = '';

	while (decimal) {
		res += (decimal % 2).toString();
		decimal = Math.floor(decimal / 2);
	}

	return res.split('').reverse().join('');
}