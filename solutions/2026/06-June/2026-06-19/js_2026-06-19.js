// JavaScript solution for 2026-06-19
// Rental Cost
function getRentalCost(rented, returned, tier) {
	const tiers = {
		1: [4.99, 3.99],
		3: [3.99, 2.99],
		7: [2.99, 0.99]
	};

	const rentedDate = new Date(rented);
	const returnedDate = new Date(returned);

	const due = new Date(rentedDate);
	due.setUTCDate(due.getUTCDate() + tier);
	due.setUTCHours(12, 0, 0, 0);

	let lateDays = 0;

	if (returnedDate > due) {
		const diff = returnedDate - due;

		lateDays = Math.floor(diff / 86400000);

		if (diff % 86400000) {
			lateDays++;
		}
	}

	const totalCost = tiers[tier][0] + tiers[tier][1] * lateDays;

	return `$${totalCost.toFixed(2)}`;
}