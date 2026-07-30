// JavaScript solution for 2026-05-30
// Best Hand
function getBestHand(cards) {
	const ranks = cards.map(c => c[0]);
	const suits = cards.map(c => c[1]);
	const ranksString = '23456789TJQKA';

	const ranksCounter = {
		'2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0,
		'8': 0, '9': 0, 'T': 0, 'J': 0, 'Q': 0, 'K': 0, 'A': 0
	};

	for (const rank of ranks) {
		ranksCounter[rank]++;
	}

	const suitsCounter = {
		'h': 0, 'd': 0, 'c': 0, 's': 0
	};

	for (const suit of suits) {
		suitsCounter[suit]++;
	}

	if (Object.values(suitsCounter).includes(5)) {
		const royal = new Set(['A', 'K', 'Q', 'J', 'T']);

		if (ranks.every(r => royal.has(r))) {
			return 'Royal Flush';
		}

		for (let r = 0; r < ranksString.length - 4; r++) {
			if (ranksCounter[ranksString[r]] === 1 && ranksCounter[ranksString[r + 1]] === 1 && ranksCounter[ranksString[r + 2]] === 1 && ranksCounter[ranksString[r + 3]] === 1 && ranksCounter[ranksString[r + 4]] === 1) {
				return 'Straight Flush';
			}
		}

		if (ranksCounter['A'] === 1 && ranksCounter['2'] === 1 && ranksCounter['3'] === 1 && ranksCounter['4'] === 1 && ranksCounter['5'] === 1) {
			return 'Straight Flush';
		}

		return 'Flush';
	}

	if (Object.values(ranksCounter).includes(4)) {
		return 'Four of a Kind';
	}

	if (Object.values(ranksCounter).includes(3) && Object.values(ranksCounter).includes(2)) {
		return 'Full House';
	}

	if (Object.values(ranksCounter).includes(3)) {
		return 'Three of a Kind';
	}

	for (let r = 0; r < ranksString.length - 4; r++) {
		if (ranksCounter[ranksString[r]] === 1 && ranksCounter[ranksString[r + 1]] === 1 && ranksCounter[ranksString[r + 2]] === 1 && ranksCounter[ranksString[r + 3]] === 1 && ranksCounter[ranksString[r + 4]] === 1) {
			return 'Straight';
		}
	}

	if (ranksCounter['A'] === 1 && ranksCounter['2'] === 1 && ranksCounter['3'] === 1 && ranksCounter['4'] === 1 && ranksCounter['5'] === 1) {
		return 'Straight';
	}

	if (Object.values(ranksCounter).includes(2)) {
		const pairs = Object.values(ranksCounter).filter(v => v === 2).length;

		if (pairs === 2) {
			return 'Two Pair';
		}

		return 'Pair';
	}

	return 'High Card';
}