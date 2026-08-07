// JavaScript solution for 2026-08-06
// Spoken Time
function getSpokenTime(hourAngle, minuteAngle) {
	const m = Math.floor(minuteAngle / 6) % 60;
	let h = Math.floor(hourAngle / 30) % 12;

	if (h === 0) {
		h = 12;
	}

	const nextH = h === 12 ? 1 : h + 1;

	if (m === 0) {
		return `${h} o'clock`;
	} else if (m === 15) {
		return `quarter past ${h}`;
	} else if (m < 30) {
		const minute = m === 1 ? 'minute' : 'minutes';
		return `${m} ${minute} past ${h}`;
	} else if (m === 30) {
		return `half past ${h}`;
	} else if (m === 45) {
		return `quarter to ${nextH}`;
	} else {
		const x = 60 - m;
		const minute = x === 1 ? 'minute' : 'minutes';
		return `${x} ${minute} to ${nextH}`;
	}
}