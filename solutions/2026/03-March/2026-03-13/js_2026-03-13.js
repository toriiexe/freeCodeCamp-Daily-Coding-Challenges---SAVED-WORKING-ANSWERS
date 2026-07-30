// JavaScript solution for 2026-03-13
// Parking Fee Calculator
function calculateParkingFee(parkTime, pickupTime) {
	const [startHour, startMinute] = parkTime.split(':').map(Number);
	const [endHour, endMinute] = pickupTime.split(':').map(Number);

	let start = startHour * 60 + startMinute;
	let end = endHour * 60 + endMinute;

	let totalCost = 0;

	if (end < start) {
		totalCost += 10;
		end += 24 * 60;
	}

	let totalHours = Math.ceil((end - start) / 60);

	totalCost += totalHours * 3;

	return totalCost >= 5 ? `$${totalCost}` : '$5';
}